import RichText from './RichText'

export default function Column({ column }) {
  const sizeClass = column.size === 'half' ? 'w-1/2' : 'w-full'

  return (
    <div className={`${sizeClass}`}>
      {column.richText.map(richText => (
        <RichText richText={richText} />
      ))}
    </div>
  )
}
