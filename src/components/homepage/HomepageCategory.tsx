'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function HomepageCategory({ category }) {
  // Assumes at least one image.
  const [activeImage, setActiveImage] = useState(category.images[0].featuredImage)
  console.log(category)


  return <div className='inline-block text-center'>
    <h2 className='bg-gray-600/60 relative top-8'>{category.title}</h2>
    <Image className="w-64 h-auto overflow-hidden rounded-md" src={activeImage.url} alt={activeImage.alt} width={activeImage.width} height={activeImage.height} />
  </div>
}