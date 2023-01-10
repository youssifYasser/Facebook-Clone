import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import {
  MagnifyingGlassIcon,
  FlagIcon,
  PlayCircleIcon,
  ShoppingCartIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import {
  HomeIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  Squares2X2Icon,
} from '@heroicons/react/20/solid';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';
import { Fragment } from 'react';
const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-white flex sticky top-0 z-50 space-x-4 items-center shadow-md p-2 lg:px-5">
      {/* left */}
      <div className="flex items-center space-x-2 ">
        <Image
          src={'https://links.papareact.com/5me'}
          width={40}
          height={40}
          alt={'facebook-logo'}
        />

        <div className="flex ml-2 p-2 items-center bg-gray-100 rounded-full">
          <MagnifyingGlassIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2  outline-none bg-transparent items-center placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-4 sm:space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayCircleIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-x-2 pr-2 justify-end">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex rounded-full active:scale-95 filter active:brightness-75 transition-all duration-150">
              <Image
                alt="profile-pic"
                width="40"
                height="40"
                src={session.user.image}
                className="rounded-full cursor-pointer"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-15 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="border-b border-gray-200">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active && 'bg-gray-100 rounded-t-lg text-gray-900'
                      } flex items-center space-x-3 p-2 cursor-default`}
                    >
                      <Image
                        alt="profile-pic"
                        width="40"
                        height="40"
                        src={session.user.image}
                        className="rounded-full"
                      />
                      <p className="whitespace-nowrap font-semibold lg:text-base">
                        {session.user.name}
                      </p>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`${
                      active && 'bg-gray-100 rounded-t-lg text-gray-900'
                    } flex items-center space-x-3 p-2 cursor-pointer`}
                    onClick={signOut}
                  >
                    <ArrowRightOnRectangleIcon className="h-6" />
                    <p className="whitespace-nowrap font-semibold lg:text-base">
                      Log Out
                    </p>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

        <Squares2X2Icon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
