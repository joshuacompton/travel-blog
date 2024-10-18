import SectionTitle from '@/components/general/SectionTitle'
import ArticlePreview from '@/components/homepage/ArticlePreview'
import CategoryPreview from '@/components/homepage/CategoryPreview'
import payload from 'payload'

export default async function Home() {
  // Should find a way to unify this with the similar call in header.
  const categories = await payload.find({
    collection: 'categories',
  })

  const featuredArticles = await payload.find({
    collection: 'pages',
    where: { featured: { equals: 'true' } },
    sort: '-createdAt',
  })

  if (!categories || !categories?.docs || categories.docs.length < 1) {
    return <div>loading</div>
  }

  return (
    <div className="page-auto-margin">
      <div className="base-margin section-bottom-margin grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.docs.map(category => (
          <CategoryPreview category={category} key={category.id} />
        ))}
      </div>

      <div className="base-margin section-bottom-margin">
        <SectionTitle title="Featured Articles" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredArticles.docs.map(article => (
            <ArticlePreview article={article} key={article.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
