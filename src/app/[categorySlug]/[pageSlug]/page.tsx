'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Layout from '@/components/article/Layout'
import qs from 'qs'
import PayloadImage from '@/components/article/PayloadImage'

export default function () {
  const { pageSlug } = useParams()
  const [page, setPage] = useState({
    id: null,
    title: '',
    hero: { summary: '', featuredImage: {} },
    categories: [{ title: '', slug: '' }],
    layout: [],
  })

  useEffect(() => {
    const fetchPage = async () => {
      const stringifiedQuery = qs.stringify(
        { where: { slug: { equals: pageSlug } } },
        { addQueryPrefix: true },
      )

      const resp = await fetch(`/api/pages${stringifiedQuery}`)
      if (!resp.ok) {
        console.log('page api failed')
      }

      const data = await resp.json()
      setPage(data?.docs[0])
    }
    fetchPage()
  }, [])

  // figure this out.
  if (!page) {
    return <p>loading</p>
  }

  const featuredImage = page?.hero?.featuredImage
  const summary = page.hero.summary
  const categoryTitle = page.categories[0].title
  const categorySlug = page.categories[0].slug

  return (
    <div>
      <h1 className="page-auto-margin section-bottom-margin">{page.title}</h1>
      <PayloadImage
        className="w-full h-80 object-cover section-bottom-margin"
        imageData={featuredImage}
      />

      <div className="page-auto-margin">
        <Link
          className="inline-block base-margin text-gray-600 font-extralight text-sm border-b-2 border-gray-300 section-bottom-margin"
          href={`/${categorySlug}`}
        >
          {categoryTitle}
        </Link>
      </div>

      <div className="page-auto-margin section-bottom-margin">
        <h2 className="base-margin">{summary}</h2>
      </div>

      <div className="page-auto-margin">
        {page.layout.map(layout => (
          <Layout layout={layout} key={layout.id} />
        ))}
      </div>
    </div>
  )
}
