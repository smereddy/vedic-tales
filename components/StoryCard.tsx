'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface StoryCardProps {
  story: {
    id: number
    title: string
    category: string
    image: string
  }
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={story.image}
        alt={story.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
        <p className="text-gray-300 mb-4">{story.category}</p>
        <Link
          href={`/stories/${story.id}`}
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
        >
          Read Story
        </Link>
      </div>
    </motion.div>
  )
}