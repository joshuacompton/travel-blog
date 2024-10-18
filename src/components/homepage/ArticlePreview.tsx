'use client'

import Link from 'next/link'
import PreviewImage from '../general/PreviewImage'

export default function ArticlePreview({ article, options = { wide: false, showCategory: true } }) {
  const featuredImage = article.hero.featuredImage
  const categoryTitle = article.categories[0].title
  const categorySlug = article.categories[0].slug
  const articleSlug = `/${categorySlug}/${article.slug}`
  const summary = article.hero.summary

  let containerClasses = ''
  let subContainerClasses = 'border border-gray-300 py-6 px-6 '
  if (options.wide) {
    // Moves the text to the right of the image.
    containerClasses += 'grid grid-cols-1 sm:grid-cols-2'
  } else {
    // Hide the top border when the image is on top.
    subContainerClasses += 'border-t-0'
  }

  return (
    <div className={containerClasses}>
      <PreviewImage image={featuredImage} slug={articleSlug} />

      <div className={subContainerClasses}>
        {options.showCategory ? (
          <Link
            className="text-gray-600 font-extralight text-sm block border-b-2 border-gray-300"
            href={categorySlug}
          >
            {categoryTitle}
          </Link>
        ) : null}

        <Link className="block font-extrabold py-3" href={articleSlug}>
          {article.title}
        </Link>
        <div className="block">
          <p>{summary}</p>
        </div>
      </div>
    </div>
  )
}
