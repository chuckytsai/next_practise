export default async function StaticPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'force-cache',
  })
  const data = await res.json()

  return (
    <div>
      <h1>App Router - Static Page</h1>
      <p>{data.title}</p>
    </div>
  )
}