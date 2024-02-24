import { BellIcon } from '@heroicons/react/24/outline';
import { navigation } from '@/contents/overview-contents';
import Link from 'next/link';
import MobileSidebar from './mobile-sidebar';

export default function MainNavbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
          {navigation.map((item, itemIdx) => (
            <Link key={itemIdx} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-x-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your profile</span>
            <img
              className="h-8 w-8 rounded-full bg-gray-800"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
