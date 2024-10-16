import PayloadImage from '../article/PayloadImage'
import Link from 'next/link'

export default function PreviewImage({ image, title, slug }) {
  return (
    <div className="relative max-w-64">
      <PayloadImage
        className="object-cover w-full h-56 rounded-md hover:grayscale"
        imageData={image}
      />

      <h2 className="bg-gray-200/70 relative bottom-8">{title}</h2>
      <Link className="after:absolute after:flex after:inset-0 after:z-10" href={slug} />
    </div>
  )
}
