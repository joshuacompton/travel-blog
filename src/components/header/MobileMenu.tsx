import Link from 'next/link'



export default function MobileMenu({ sections }) {


  return <nav>
    <ul>
      {sections.map((section) => (
        <li key={section.id}><Link href={`/section/${section.slug}`}>{section.title}</Link></li>
      ))}
    </ul>
  </nav>
}