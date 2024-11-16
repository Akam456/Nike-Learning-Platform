import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const IconPlaceholder = ({ children }) => (
    <span className="inline-block w-6 h-6 text-center">{children}</span>
  );
const Header = ({Title}) => {
  return (
    <div className='flex justify-between'>
        <h1 className="text-[1.7rem] font-bold text-red-500 mt-4">{Title}</h1>
        <div className='flex gap-x-5 mr-5'>
            <Image
                src="/header_images/star.svg"
                alt="star"
                width={27}
                height={27}
            />
            <Image
                src="/header_images/notifications.svg"
                alt="notify"
                width={27}
                height={27}
            />
            <Image
                src="/header_images/profile.svg"
                alt="profile"
                width={27}
                height={27}
            />
        </div>
    </div>
  );
};

export default Header;
