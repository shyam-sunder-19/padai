import Image from 'next/image'
import SplashScreen from '@/components/landing_page/SplashScreen'
import InfiniteHorizontalScroll from '@/components/landing_page/InfiniteHorizontalScroll'
import FlexStats from '@/components/landing_page/FlexStats'
import FormSlide from '@/components/landing_page/FormSlide'

export default function Home() {
  return (
    <main className="flex flex-col">
      <SplashScreen />
      <FlexStats
        stats = {
          {
            "Courses" : 1861,
            "Certifications" : 500,
            "Universities" : 80,
            "Executive Programmes" : 50,
          }
        }
      />
      <FormSlide />
    </main>
  )
}
