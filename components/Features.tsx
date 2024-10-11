import { Sparkles, Headphones, Clock } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Ancient Wisdom',
    description: 'Access timeless knowledge from Indian scriptures and epics.',
  },
  {
    icon: Headphones,
    title: 'Audio Narration',
    description: 'Listen to professionally narrated stories for an immersive experience.',
  },
  {
    icon: Clock,
    title: 'Bite-sized Learning',
    description: 'Enjoy short, easy-to-digest stories perfect for daily consumption.',
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Unlock the Power of Vedic Tales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors">
              <feature.icon className="w-12 h-12 mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}