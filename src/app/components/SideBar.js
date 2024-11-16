import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div
      className="w-20 bg-black text-white fixed flex flex-col items-center rounded-2xl"
      style={{
        top: '20px', // Fixed space from the top
        bottom: '20px', // Fixed space from the bottom
        left: '20px', // Fixed space from the left
        width: '80px', // Sidebar width
        height: 'calc(100vh - 40px)', // Dynamically calculate height (total height - top and bottom spacing)
      }}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <Image
          src="/sidebar_images/logo.svg" // Replace with your logo's path
          alt="Logo"
          width={40}
          height={40}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow mt-4 flex flex-col items-center justify-between">
        <ul className="flex flex-col space-y-6">
          <li>
            <Link href="/home" className="hover:bg-gray-700 rounded p-2 flex items-center justify-center">
              <Image
                src="/sidebar_images/home.svg" // Replace with your home icon path
                alt="Home Icon"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="../skills" className="hover:bg-gray-700 rounded p-2 flex items-center justify-center">
              <Image
                src="/sidebar_images/courses.svg" // Replace with your courses icon path
                alt="Courses Icon"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/transactions" className="hover:bg-gray-700 rounded p-2 flex items-center justify-center">
              <Image
                src="/sidebar_images/transactions.svg" // Replace with your transactions icon path
                alt="Transactions Icon"
                width={20}
                height={20}
              />
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="hover:bg-gray-700 rounded p-2 flex items-center justify-center">
              <Image
                src="/sidebar_images/analytics.svg" // Replace with your analytics icon path
                alt="Analytics Icon"
                width={20}
                height={20}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
