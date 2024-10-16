import Column from './Column'

export default function Layout({ layout }) {
  console.log(layout)

  return (
    <div className="flex gap-8">
      {layout.columns.map(column => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  )
}
