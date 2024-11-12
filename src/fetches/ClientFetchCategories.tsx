export default function ClientFetchCategories() {
  const fetchData = async () => {
    const resp = await fetch('/api/categories')
    if (!resp.ok) {
      // figure out how to handle error
      console.log('Category API failed')
    }
    const data = await resp.json()
    return await data?.docs
  }

  return fetchData()
}
