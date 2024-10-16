'use client'
import Image from 'next/image'
import Link from 'next/link'
import PreviewImage from '../general/PreviewImage'

export default function ArticlePreview({ article }) {
  console.log(article)
  const featuredImage = article.hero.featuredImage
  const categoryTitle = article.categories[0].title
  const categorySlug = article.categories[0].slug

  return (
    <PreviewImage
      image={featuredImage}
      title={article.title}
      slug={`/${categorySlug}/${article.slug}`}
    />
  )
}
