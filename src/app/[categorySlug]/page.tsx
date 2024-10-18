'use client'

import Image from 'next/image'
import PayloadImage from '@/components/article/PayloadImage'
import ArticlePreview from '@/components/homepage/ArticlePreview'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import qs from 'qs'
import SectionTitle from '@/components/general/SectionTitle'

export default function Category() {
  const { categorySlug } = useParams()
  const [category, setCategory] = useState({ id: '', title: '', images: [] })
  const [pages, setPages] = useState([])
  const [activeImage, setActiveImage] = useState({ url: '', alt: '', width: null, height: null })
  console.log(category.id)
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

  return (
    <div className="">
      <h1 className="base-margin text-center section-bottom-margin h1">{category.title}</h1>

      <PayloadImage
        className="w-full h-80 object-cover section-bottom-margin"
        imageData={activeImage}
      />

      <div className="page-auto-margin">
        <div className="base-margin section-bottom-margin flex content-center gap-4 flex-wrap">
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

        <div className="base-margin">
          <SectionTitle title="Articles" />
        </div>
        <div className="base-margin grid grid-cols-1 lg:grid-cols-2 gap-4">
          {pages.length > 0
            ? pages.map(page => (
                <ArticlePreview article={page} options={{ wide: true, showCategory: false }} />
              ))
            : null}
        </div>
      </div>
    </div>
  )
}
