import HomepageCategory from '@/components/homepage/HomepageCategory'
import Image from 'next/image'
import payload from 'payload'


export default async function Home() {
  // Should find a way to unify this with the similar call in header.
  const categories = await payload.find({
    collection: 'categories',
  })

  if (!categories || !categories?.docs || categories.docs.length < 1) {
    return <div>loading</div>
  }

  return <div>
    <div className="flex gap-4 justify-between">
      {categories.docs.map((category) => (
        <HomepageCategory category={category} key={category.id} />
      ))}
    </div>
    
  </div>
}
