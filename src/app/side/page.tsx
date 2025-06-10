export default async function SideExample() {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store' // ✅ 等同於 getSideProps 的效果
  })
  const data = await res.json()

  return (
    <div>
      <h1>App Router - Side Page</h1>
      <p>從 API 拿到的資料：{data.message}</p>
    </div>
  )
};