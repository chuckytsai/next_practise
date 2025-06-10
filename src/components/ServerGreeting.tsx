export default function ServerGreeting() {
  const time = new Date().toLocaleTimeString()
  return <p className="title">這是伺服器端渲染的時間：{time}</p>
}