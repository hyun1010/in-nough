'use client';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function WorkSpaceLayout({
  children,
  header,
  sidebar,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex h-screen">
        {sidebar}
        <div className="flex-1 flex flex-col">
          {header}
          <main className="p-6 h-full bg-primary-gray-100">{children}</main>
        </div>
      </div>
    </SessionProvider>
  );
}
