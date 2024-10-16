import ArticlePreview from '@/components/homepage/ArticlePreview'
import HomepageCategory from '@/components/homepage/HomepageCategory'
import Image from 'next/image'
import payload from 'payload'


export default async function Home() {
  // Should find a way to unify this with the similar call in header.
  const categories = await payload.find({
    collection: 'categories',
  })

  const featuredArticles = await payload.find({
    collection: 'pages',
    where: {featured: {equals: 'true' }},
    sort: '-createdAt',
  })

  if (!categories || !categories?.docs || categories.docs.length < 1) {
    return <div>loading</div>
  }

  return <div>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
      {categories.docs.map((category) => (
        <HomepageCategory category={category} key={category.id} />
      ))}
    </div>

    <div className="mt-8">
      <h2>Featured Articles</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
        {featuredArticles.docs.map((article) => (
          <ArticlePreview article={article} key={article.id} />
        ))}
      </div>
      
    </div>
    
  </div>
}
