import Image from 'next/image'
import React from 'react'

const StoryCard = ({ story }) => {
  const { name, src, profile } = story
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-52 lg:w-28 xl:h-56 xl:w-32 cursor-pointer overflow-x p-3 hover:scale-105 hover:animate-pulse transition-transform duration-150 ease-out '>
      <Image
        src={profile}
        height={40}
        width={40}
        alt='profile-pic'
        className='absolute opacity-0 lg:opacity-100 rounded-full z-10 top-2 left-2 object-cover h-12 w-12'
      />
      <Image
        src={src}
        alt='story-pic'
        className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
        fill
      />
      <p className='absolute opacity-0 lg:opacity-100 z-50 bottom-4 left-2 text-white font-medium'>
        {name}
      </p>
    </div>
  )
}

export default StoryCard
