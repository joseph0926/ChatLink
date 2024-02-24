import { User2 } from 'lucide-react';
import Link from 'next/link';

export default function LandingNavbar() {
  return (
    <header className="inset-x-0 z-[999] h-16 w-full border-b border-white/10">
      <div className="flex h-full items-center justify-between px-14 text-white">
        <Link href="/landing" className="text-xl font-bold">
          <span className="text-2xl text-blue-500">Chat</span>Link
        </Link>
        <div className="flex cursor-pointer items-center gap-4">
          <User2 className="h-8 w-8" />
          <span className="text-lg font-semibold">Login</span>
        </div>
      </div>
    </header>
  );
}
