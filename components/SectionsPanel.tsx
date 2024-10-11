'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SectionsPanelProps {
  isOpen: boolean
  onClose: () => void
  sections: { title: string }[]
  currentSection: number
  onSelectSection: (index: number) => void
}

export default function SectionsPanel({
  isOpen,
  onClose,
  sections,
  currentSection,
  onSelectSection,
}: SectionsPanelProps) {
  return (
    <motion.div
      className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg z-50"
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Sections</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X />
          </Button>
        </div>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={index}>
              <Button
                variant={currentSection === index ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onSelectSection(index)}
              >
                {section.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}