'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BookOpen } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse">
          Discover the Wisdom of Vedic Tales
        </h1>
        <p className="text-xl mb-8 text-gray-300">
          Immerse yourself in the timeless stories of Indian culture and Hindu epics. Listen, read, and learn from ancient wisdom.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
            required
          />
          <Button type="submit" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white">
            Start Your Journey
          </Button>
        </form>
        <div className="flex justify-center items-center text-yellow-400">
          <BookOpen className="mr-2" />
          <span>Join 10,000+ wisdom seekers</span>
        </div>
      </div>
    </section>
  )
}