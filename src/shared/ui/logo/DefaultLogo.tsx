import Link from 'next/link';
import React from 'react';

export default function DefaultLogo() {
  return (
    <Link
      href={'/'}
      className="text-4xl font-bold text-center h-16 text-primary-600 font-logo flex items-center justify-center"
    >
      IN-nough
    </Link>
  );
}
