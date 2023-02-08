import { VideoCameraIcon } from '@heroicons/react/20/solid'
import {
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import Contact from './Contact'

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezoz' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
  { src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg' },
  { src: 'https://links.papareact.com/d0c', name: 'Harry Potter' },
  { src: 'https://links.papareact.com/r57', name: 'James Bond' },
]

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 mt-5 p-2'>
      <div className='flex justify-between items-center mb-5 text-gray-500'>
        <h2 className='text-xl'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6 cursor-pointer' />
          <MagnifyingGlassIcon className='h-6 cursor-pointer' />
          <EllipsisHorizontalIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.src} name={contact.name} src={contact.src} />
        ))}
      </div>
    </div>
  )
}

export default Widgets
