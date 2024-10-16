'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomepageCategory({ category }) {
  // Assumes at least one image.
  const [activeImage, setActiveImage] = useState(category.images[0].featuredImage)

  return (
    <div className="inline-block text-center relative focus-within:hover:grayscale">
      <Image
        className="object-cover w-full h-56 rounded-md"
        src={activeImage.url}
        alt={activeImage.alt}
        width={activeImage.width}
        height={activeImage.height}
      />

      <h2 className="bg-gray-600/60 relative bottom-8">{category.title}</h2>
      <Link
        className="after:absolute after:flex after:inset-0 after:z-10"
        href={`/${category.slug}`}
      />
    </div>
  )
}
