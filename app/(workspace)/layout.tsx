'use client';
import { Header, SideBar } from '@/widget';
import { SessionProvider } from 'next-auth/react';

export default function WorkSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 h-full bg-neutral-3">{children}</main>
        </div>
      </div>
    </SessionProvider>
  );
}
