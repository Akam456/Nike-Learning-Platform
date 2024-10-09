import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon, BookOpenIcon, ArrowsRightLeftIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex items-center justify-center h-16">
          <Image src="/images/nike-logo.png" alt="Nike Logo" className="h-8" width={80} height={80}/>
        </div>

        <nav className="space-y-1 px-4">
          <Link href="/">
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-700 rounded-md transition">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </div>
          </Link>
          <Link href="/home">
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-700 rounded-md transition">
              <BookOpenIcon className="h-5 w-5" />
              <span>Courses</span>
            </div>
          </Link>
          <Link href="/skills">
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-700 rounded-md transition">
              <ArrowsRightLeftIcon className="h-5 w-5" />
              <span>Skill Swap</span>
            </div>
          </Link>
          <Link href="/progress">
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-700 rounded-md transition">
              <ChartBarIcon className="h-5 w-5" />
              <span>Progress</span>
            </div>
          </Link>
        </nav>
      </div>

      <div className="px-4 py-4">
        <p className="text-xs text-gray-400">© 2024 Nike</p>
      </div>
    </div>
  );
};

export default Sidebar;
