import StoryPageClient from './StoryPageClient'
import { storiesData } from '@/lib/storiesData'

export function generateStaticParams() {
  return storiesData.map((story) => ({
    id: story.id.toString(),
  }))
}

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = storiesData.find(s => s.id.toString() === params.id)
  
  if (!story) {
    return <div>Story not found</div>
  }

  return <StoryPageClient initialStory={story} />
}