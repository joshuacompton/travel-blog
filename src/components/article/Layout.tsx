import Column from './Column'

export default function Layout({ layout }) {
  console.log(layout)

  return (
    <div className="base-margin flex gap-8 flex-wrap md:flex-nowrap">
      {layout.columns.map(column => (
        <Column column={column} key={column.id} />
      ))}
    </div>
  )
}
