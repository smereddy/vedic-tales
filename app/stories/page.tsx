'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import StoryCard from '@/components/StoryCard'
import SearchBar from '@/components/SearchBar'
import ParallaxBackground from '@/components/ParallaxBackground'

const stories = [
  { id: 1, title: "The Birth of Krishna", category: "Bhagavata Purana", image: "https://source.unsplash.com/featured/?krishna" },
  { id: 2, title: "Arjuna's Dilemma", category: "Bhagavad Gita", image: "https://source.unsplash.com/featured/?arjuna" },
  { id: 3, title: "The Churning of the Ocean", category: "Samudra Manthan", image: "https://source.unsplash.com/featured/?ocean" },
  { id: 4, title: "Hanuman's Leap", category: "Ramayana", image: "https://source.unsplash.com/featured/?monkey" },
  { id: 5, title: "The Game of Dice", category: "Mahabharata", image: "https://source.unsplash.com/featured/?dice" },
  { id: 6, title: "The Story of Prahlada", category: "Bhagavata Purana", image: "https://source.unsplash.com/featured/?devotion" },
]

export default function StoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    story.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white relative overflow-hidden">
      <ParallaxBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Vedic Tales
        </motion.h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}