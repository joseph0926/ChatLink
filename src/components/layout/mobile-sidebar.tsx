'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { navigation } from '@/contents/overview-contents';
import Link from 'next/link';

export default function MobileSidebar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  return (
    <Sheet open={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
      <SheetTrigger>
        <div className="-m-3 flex flex-1 items-center gap-x-6 p-3">
          <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="mt-2 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
    // <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    //     <div className="fixed inset-0 z-50" />
    //     <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
    //       <div className="-ml-0.5 flex h-16 items-center gap-x-6">
    //         <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
    //           <span className="sr-only">Close menu</span>
    //           <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //         </button>
    //         <div className="-ml-0.5">
    //           <a href="#" className="-m-1.5 block p-1.5">
    //             <span className="sr-only">Your Company</span>
    //             <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
    //           </a>
    //         </div>
    //       </div>

    //     </Dialog.Panel>
    //   </Dialog>
  );
}
