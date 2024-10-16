import Link from 'next/link'



export default function MobileMenu({ categories }) {


  return <nav>
    <ul>
      {categories.map((category) => (
        <li key={category.id}><Link href={`/${category.slug}`}>{category.title}</Link></li>
      ))}
    </ul>
  </nav>
}