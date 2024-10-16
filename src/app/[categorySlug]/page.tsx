'use client'

import Image from 'next/image'
import ArticlePreview from '@/components/homepage/ArticlePreview'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import qs from 'qs'

export default function Category() {
  const { categorySlug } = useParams()
  const [category, setCategory] = useState({ id: '', title: '', images: [] })
  const [pages, setPages] = useState([])
  const [activeImage, setActiveImage] = useState({ url: '', alt: '', width: null, height: null })

  useEffect(() => {
    const fetchCategory = async () => {
      const stringifiedQuery = qs.stringify(
        { where: { slug: { equals: categorySlug } } },
        { addQueryPrefix: true },
      )

      const resp = await fetch(`/api/categories${stringifiedQuery}`)
      if (!resp.ok) {
        console.log('category api failed')
      }
      const data = await resp.json()
      setCategory(data?.docs[0])

      const firstImage = data?.docs[0]?.images[0]?.featuredImage
      if (firstImage) {
        setActiveImage(firstImage)
      }
    }
    fetchCategory()

    const fetchPages = async () => {
      const stringifiedQuery = qs.stringify(
        { where: { categories: { contains: category.id } } },
        { addQueryPrefix: true },
      )

      const resp = await fetch(`/api/pages${stringifiedQuery}`)
      if (!resp.ok) {
        console.log('page api failed')
      }
      const data = await resp.json()
      setPages(data?.docs)
    }
    fetchPages()
  }, [])
  console.log(pages)
  return (
    <div className="mt-16">
      <h1 className="text-center">{category.title}</h1>
      {activeImage?.url ? (
        <Image
          className="w-full h-80 object-cover"
          src={activeImage.url}
          alt={activeImage.alt}
          width={activeImage.width}
          height={activeImage.height}
        />
      ) : null}

      <div className="flex gap-4 mt-8 flex-wrap">
        {category.images.length > 1
          ? category.images.map(image => (
              <Image
                className="w-16 h-16 object-cover"
                src={image.featuredImage.url}
                alt={image.featuredImage.alt}
                width={image.featuredImage.width}
                height={image.featuredImage.height}
                key={image.featuredImage.id}
                onClick={() => setActiveImage(image.featuredImage)}
              />
            ))
          : null}
      </div>

      <h2 className="mt-16">Articles</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
        {pages.length > 0 ? pages.map(page => <ArticlePreview article={page} />) : null}
      </div>
    </div>
  )
}
