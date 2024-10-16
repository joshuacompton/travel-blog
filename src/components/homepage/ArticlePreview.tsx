'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ArticlePreview({ article }) {
  console.log(article)
  const featuredImage = article.hero.featuredImage
  const categoryTitle = article.categories[0].title
  const categorySlug = article.categories[0].slug

  return (
    <div className="relative">
      <Image
        className="object-cover w-full h-56 rounded-md hover:grayscale"
        src={featuredImage.url}
        alt={featuredImage.alt}
        width={featuredImage.width}
        height={featuredImage.height}
      />

      <h2 className="bg-gray-600/60 relative bottom-8">{article.title}</h2>
      <Link
        className="after:absolute after:flex after:inset-0 after:z-10"
        href={`/${categorySlug}/${article.slug}`}
      />
    </div>
  )
}
