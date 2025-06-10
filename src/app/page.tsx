import ServerGreeting from '@/components/ServerGreeting'
import SharedTitle from '@/components/SharedTitle'

export default function Home() {
  return (
    <main>
      <SharedTitle text="首頁" />
      <ServerGreeting />
    </main>
  );
}
