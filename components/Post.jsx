import {
  ChatBubbleLeftEllipsisIcon,
  HandThumbUpIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

const Post = ({ name, message, profileImage, postImage, timestamp }) => {
  const [showMessage, setShowMessage] = useState(false)
  return (
    <div className='flex flex-col bg-white rounded-2xl shadow-md mt-6'>
      <div className='flex items-center space-x-2 p-3 sm:p-5'>
        <Image
          src={profileImage}
          height={40}
          width={40}
          alt='profile-pic'
          className='rounded-full'
        />

        <div className='flex flex-col'>
          <p className='text-sm font-medium'>{name}</p>
          {timestamp ? (
            <p className='text-xs text-gray-400 '>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </p>
          ) : (
            <p className='text-xs text-gray-400 '>Loading...</p>
          )}
        </div>
      </div>

      <div className='px-3 mb-2'>
        <p className='whitespace-pre-line'>
          {showMessage ? message : message.slice(0, 50)}
          {showMessage || (message.slice(50).length > 0 && '...')}
          {message.slice(50).length > 0 && (
            <span
              className={`${
                showMessage && 'hidden'
              } underline cursor-pointer text-gray-600 ml-1`}
              onClick={() => setShowMessage(true)}
            >
              more
            </span>
          )}
        </p>
      </div>

      {postImage && (
        <div className=' h-56 md:h-96 bg-white pt-2 mb-2 overflow-hidden relative'>
          <Image
            src={postImage}
            fill
            alt='post-image'
            className='object-cover'
          />
        </div>
      )}

      <div className='flex justify-between items-center border-t'>
        <div className='postIcon rounded-bl-2xl'>
          <HandThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='postIcon'>
          <ChatBubbleLeftEllipsisIcon className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='postIcon rounded-br-2xl '>
          <ShareIcon className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
