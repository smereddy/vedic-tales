import Image from 'next/image'

const categories = [
  { name: 'Ramayana', image: 'https://source.unsplash.com/featured/?ramayana' },
  { name: 'Mahabharata', image: 'https://source.unsplash.com/featured/?mahabharata' },
  { name: 'Bhagavad Gita', image: 'https://source.unsplash.com/featured/?bhagavadgita' },
  { name: 'Vedas', image: 'https://source.unsplash.com/featured/?vedas' },
  { name: 'Upanishads', image: 'https://source.unsplash.com/featured/?upanishads' },
  { name: 'Puranas', image: 'https://source.unsplash.com/featured/?puranas' },
]

export default function Categories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Explore Epic Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg group">
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}