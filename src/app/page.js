import Image from 'next/image'
import SplashScreen from '@/components/landing_page/SplashScreen'
import HorizontalScroll from '@/components/landing_page/HorizontalScroll'

export default function Home() {
  return (
    <main className="flex flex-col">
      <SplashScreen />
      <HorizontalScroll />

    </main>
  )
}
