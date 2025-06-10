export default async function StaticExample() {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'force-cache', // ✅ 等同於 getStaticProps 的效果
  })
  const data = await res.json()

  return (
    <div>
      <h1>App Router - Static Page</h1>
      <p>從 API 拿到的資料：{data.message}</p>
    </div>
  )
};