import StoryCard from './StoryCard'

const stories = [
  {
    name: 'Youssef Y.Gado',
    src: '/story.jpg',
    profile: '/profile.jpg',
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
]

const Stories = () => {
  return (
    <div className='flex justify-around lg:justify-center lg:space-x-3  mx-auto'>
      {stories.map((story) => (
        <StoryCard key={story.src} story={story} />
      ))}
    </div>
  )
}

export default Stories
