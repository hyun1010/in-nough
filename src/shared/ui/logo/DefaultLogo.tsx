'use client';
import { PATH_NAME } from '@/shared/model';
import { cn } from '@/shared/utils';
import Link from 'next/link';
import React from 'react';

interface DefaultLogoProps {
  prevent?: boolean;
}

export default function DefaultLogo({ prevent }: DefaultLogoProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prevent) {
      e.preventDefault();
    }
  };

  return (
    <Link
      href={PATH_NAME.HOME}
      className={cn(
        'flex h-16 items-center justify-center text-center font-logo text-4xl font-bold text-primary-600',
        { 'cursor-default': prevent }
      )}
      onClick={handleClick} // 클릭 시 handleClick을 실행
    >
      IN-nough
    </Link>
  );
}
