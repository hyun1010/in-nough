'use client';
import { Button } from '@/shared/ui';
import { twAllMerge } from '@/shared/utils';
import { IconChevronRight, IconHome } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItems = [{ name: 'Dashboard', href: '/main', icon: IconHome }];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative h-screen bg-neutral-4 shadow-sm flex flex-col border-r border-gray-100 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-60'
      }`}
    >
      <div className="h-20 flex items-center justify-center px-5 py-5 border-b border-gray-100">
        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          <h1
            className={twAllMerge(
              !isCollapsed &&
                'opacity-100 text-2xl font-bold text-neutral-1 w-48',
              isCollapsed && 'opacity-0'
            )}
          >
            이너프
          </h1>
        </div>
        <Button
          variant="ghost"
          onClick={() => setIsCollapsed(!isCollapsed)}
          prefixIcon={
            <IconChevronRight
              size={25}
              className={isCollapsed ? 'rotate-0' : 'rotate-180'}
            />
          }
        />
      </div>

      <nav className="flex flex-col space-y-2 items-center py-5 font-noto-sans">
        {menuItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={twAllMerge(
                'flex items-center p-3 rounded-lg transition h-11 w-fit',
                isActive
                  ? 'text-primary bg-primary/10 font-semibold'
                  : 'text-gray-600 hover:bg-primary/10 hover:text-gray-800'
              )}
            >
              <div className="flex-shrink-0">
                <Icon
                  size={25}
                  className={isActive ? 'text-primary' : 'text-gray-500'}
                />
              </div>
              <span
                className={`overflow-hidden transition-all duration-300 ease-in-out leading-none ${
                  isCollapsed ? 'w-0 opacity-0' : 'w-32 opacity-100 ml-3'
                }`}
              >
                {name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
