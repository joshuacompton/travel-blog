'use client'
import { useState } from 'react'
import Image from 'next/image'
import PreviewImage from '../general/PreviewImage'
import Link from 'next/link'

export default function HomepageCategory({ category }) {
  // Assumes at least one image.
  const [activeImage, setActiveImage] = useState(category.images[0].featuredImage)

  return <PreviewImage image={activeImage} title={category.title} slug={`/${category.slug}`} />
}
