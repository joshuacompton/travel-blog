'use client'
import { useState } from 'react'
import PreviewImage from '../general/PreviewImage'

export default function HomepageCategory({ category }) {
  // Assumes at least one image.
  const [activeImage, setActiveImage] = useState(category.images[0].featuredImage)

  return (
    <PreviewImage
      image={activeImage}
      options={{ tall: true, rounded: false }}
      title={category.title}
      slug={`/${category.slug}`}
    />
  )
}
