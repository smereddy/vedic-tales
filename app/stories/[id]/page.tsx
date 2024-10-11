import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProgressBar from '@/components/ProgressBar'
import SectionsPanel from '@/components/SectionsPanel'

// Mock data for the stories
const storiesData = [
  {
    id: 1,
    title: "The Birth of Krishna",
    category: "Bhagavata Purana",
    image: "https://source.unsplash.com/featured/?krishna",
    sections: [
      { title: "The Prophecy", content: "Long ago, in the kingdom of Mathura..." },
      { title: "Devaki's Imprisonment", content: "Kamsa, fearing for his life..." },
      { title: "Divine Intervention", content: "As the eighth child was about to be born..." },
      { title: "The Miraculous Birth", content: "In the dead of night, in a prison cell..." },
      { title: "Vasudeva's Journey", content: "With the newborn Krishna in his arms..." },
    ]
  },
  // Add more stories here...
]

export default function generateStaticParams() {
  return storiesData.map((story) => ({
    id: story.id.toString(),
  }))
}

export default function StoryPage() {
  const { id } = useParams()
  const [currentSection, setCurrentSection] = useState(0)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [storyData, setStoryData] = useState(storiesData[0])

  useEffect(() => {
    const story = storiesData.find(s => s.id.toString() === id)
    if (story) {
      setStoryData(story)
    }
  }, [id])

  const handlePrevious = () => {
    setCurrentSection((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentSection((prev) => Math.min(storyData.sections.length - 1, prev + 1))
  }

  const progress = ((currentSection + 1) / storyData.sections.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
          <Image
            src={storyData.image}
            alt={storyData.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center">{storyData.title}</h1>
          </div>
        </div>
        <p className="text-xl mb-4 text-center">{storyData.category}</p>
        
        <ProgressBar progress={progress} />

        <div className="flex justify-between items-center mb-8">
          <Button onClick={handlePrevious} disabled={currentSection === 0}>
            <ChevronLeft className="mr-2" /> Previous
          </Button>
          <Button onClick={() => setIsPanelOpen(true)}>
            <List className="mr-2" /> Sections
          </Button>
          <Button onClick={handleNext} disabled={currentSection === storyData.sections.length - 1}>
            Next <ChevronRight className="ml-2" />
          </Button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{storyData.sections[currentSection].title}</h2>
            <p className="text-lg leading-relaxed">{storyData.sections[currentSection].content}</p>
          </motion.div>
        </AnimatePresence>

        <SectionsPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          sections={storyData.sections}
          currentSection={currentSection}
          onSelectSection={(index) => {
            setCurrentSection(index)
            setIsPanelOpen(false)
          }}
        />
      </div>
    </div>
  )
}