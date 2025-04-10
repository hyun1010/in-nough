'use client';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const InternalProfilePicture: React.FC<ProfilePictureProps> = ({
  src,
  alt,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    signOut();
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="w-11 h-11 rounded-full overflow-hidden relative cursor-pointer"
        onClick={handleDropdownToggle}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-neutral-3 rounded-md  z-10 overflow-hidden">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-neutral-1 hover:bg-gray-100 transition-colors duration-200 rounded-md"
          >
            로그아웃
          </button>
        </div>
      )}
    </div>
  );
};

export default InternalProfilePicture;
