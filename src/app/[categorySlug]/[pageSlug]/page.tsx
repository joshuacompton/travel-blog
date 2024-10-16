'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Layout from '@/components/article/Layout'
import qs from 'qs'
import PayloadImage from '@/components/article/PayloadImage'

export default function () {
  const { pageSlug } = useParams()
  const [page, setPage] = useState({
    id: null,
    title: '',
    hero: { richText: {}, featuredImage: {} },
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
  // console.log(page?.hero?.richText)

  const featuredImage = page?.hero?.featuredImage
  const heroRichText = page?.hero?.richText
  let heroText = null
  if (heroRichText) {
    heroText = heroRichText[0]?.children[0]?.text
    console.log(page)
  }

  return (
    <div>
      <h1 className="page-auto-margin section-bottom-margin">{page.title}</h1>
      <PayloadImage className="w-full h-80 object-cover" imageData={featuredImage} />

      <h2 className="page-auto-margin section-bottom-margin text-center">{heroText}</h2>

      <div className="page-auto-margin">
        {page.layout.map(layout => (
          <Layout layout={layout} key={layout.id} />
        ))}
      </div>
    </div>
  )
}
