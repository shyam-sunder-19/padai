import Image from 'next/image'
import SplashScreen from '@/components/landing_page/SplashScreen'
import InfiniteHorizontalScroll from '@/components/landing_page/InfiniteHorizontalScroll'

export default function Home() {
  return (
    <main className="flex flex-col">
      <SplashScreen />
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10vh">
          <InfiniteHorizontalScroll numSquares={20} />
        </div>
      </div>
    </main>
  )
}
