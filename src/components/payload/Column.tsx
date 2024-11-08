import RichText from './RichText'

export default function Column({ column }) {
  return (
    <div className="">
      {column.richText.map(richText => (
        <RichText richText={richText} />
      ))}
    </div>
  )
}
