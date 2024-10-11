import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Categories from '@/components/Categories'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white">
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <Pricing />
      <div className="text-center py-12">
        <Link href="/stories" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 text-lg">
          Explore All Stories
        </Link>
      </div>
    </main>
  )
}