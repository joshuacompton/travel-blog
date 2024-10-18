import PayloadImage from '../article/PayloadImage'
import Link from 'next/link'

export default function PreviewImage({
  image,
  title = '',
  slug,
  options = { tall: false, rounded: false },
}) {
  let imageClasses = 'object-cover w-full hover:grayscale '
  if (options.rounded) {
    imageClasses += ' rounded-md'
  }

  imageClasses += options.tall ? ' h-96' : ' h-56'

  return (
    <div className="relative border border-gray-300">
      <PayloadImage className={imageClasses} imageData={image} />

      {title ? (
        <h2 className="bg-gray-200/70 absolute bottom-0 block w-full text-center">{title}</h2>
      ) : null}

      <Link className="after:absolute after:flex after:inset-0 after:z-10" href={slug} />
    </div>
  )
}
