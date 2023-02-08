import { useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'
import { UsersIcon, CalendarIcon, ClockIcon } from '@heroicons/react/20/solid'
import {
  UserGroupIcon,
  ShoppingBagIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const { data: session } = useSession()
  return (
    <div className='flex flex-col py-2 sm:p-2 mt-5  shadow-md sm:shadow-none'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title={'Friends'} />
      <SidebarRow Icon={UserGroupIcon} title={'Groups'} />
      <SidebarRow Icon={ShoppingBagIcon} title={'Marketplace'} />
      <SidebarRow Icon={ComputerDesktopIcon} title={'Watch'} />
      <SidebarRow Icon={CalendarIcon} title={'Events'} />
      <SidebarRow Icon={ClockIcon} title={'Memories'} />
      <SidebarRow Icon={ChevronDownIcon} title={'See More'} />
    </div>
  )
}

export default Sidebar
