import { BookOpen, Headphones, LightbulbIcon, Repeat } from 'lucide-react'

const steps = [
  { icon: BookOpen, title: 'Choose a Story', description: 'Browse our vast collection of Vedic tales and select one that resonates with you.' },
  { icon: Headphones, title: 'Listen or Read', description: 'Immerse yourself in the story through audio narration or read at your own pace.' },
  { icon: LightbulbIcon, title: 'Reflect and Learn', description: 'Uncover the hidden wisdom and apply the teachings to your daily life.' },
  { icon: Repeat, title: 'Repeat Daily', description: 'Make Vedic Tales a part of your routine for continuous growth and enlightenment.' },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}