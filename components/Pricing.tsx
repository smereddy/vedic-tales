'use client'

import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Seeker',
    price: '$9.99',
    features: ['Access to 100+ stories', 'Basic audio narration', 'Daily wisdom quotes'],
  },
  {
    name: 'Devotee',
    price: '$19.99',
    features: ['Access to 500+ stories', 'Premium audio narration', 'Guided meditation sessions', 'Monthly live Q&A'],
  },
  {
    name: 'Guru',
    price: '$29.99',
    features: ['Access to all stories', 'Exclusive audio commentaries', 'Personal spiritual guidance', 'Quarterly virtual retreats'],
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Choose Your Path
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg font-normal">/month</span></p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Start Your Journey
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}