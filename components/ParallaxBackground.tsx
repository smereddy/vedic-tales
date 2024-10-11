'use client'

import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    controls.start({
      x: mousePosition.x / 50,
      y: mousePosition.y / 50,
    })
  }, [mousePosition, controls])

  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={controls}
      transition={{ type: 'spring', damping: 15, stiffness: 50 }}
    >
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/featured/?starry,night')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/70" />
    </motion.div>
  )
}