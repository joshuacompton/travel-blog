export default function SectionTitle({ title }) {
  return (
    <div className="w-full flex items-center">
      <h2 className="inline-block pr-4 ali">{title}</h2>
      <span className="inline-block border-b-4 border-gray-900  align-middle grow"></span>
    </div>
  )
}
