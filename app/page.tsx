import Header from '@/components/Header'
import HomeCard from '@/components/HomeCard'


export default function Home() {
  return (
    <main className='p-24'>
      <Header />
      <section className="flex min-h-screen flex-col justify-between p-24 mb-44 ">
        <HomeCard />
      </section>
    </main>
  )
}
