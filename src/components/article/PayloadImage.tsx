import Image from 'next/image'

export default function PayloadImage({ className, imageData }) {
  return (
    <Image
      className="w-full h-80 object-cover"
      src={imageData.url}
      alt={imageData.alt}
      width={imageData.width}
      height={imageData.height}
    />
  )
}
