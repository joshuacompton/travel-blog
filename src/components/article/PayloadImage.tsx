import Image from 'next/image'

export default function PayloadImage({ className, imageData }) {
  return (
    <Image
      className={className}
      src={imageData.url}
      alt={imageData.alt}
      width={imageData.width}
      height={imageData.height}
    />
  )
}
