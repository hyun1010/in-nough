'use client';
import { twAllMerge } from '@/shared/utils';
import {
  IconChevronLeft,
  IconChevronRight,
  IconClipboardList,
  IconHome,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const menuItems = [
  { name: 'Dashboard', href: '/main', icon: IconHome },
  { name: 'Transactions', href: '/transactions', icon: IconClipboardList },
];
export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`relative h-screen bg-neutral-4 shadow-sm flex flex-col border-r border-gray-100 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-60'
      }`}
    >
      <div className="h-20 flex items-center justify-between p-5 border-b border-gray-100">
        <div className={`overflow-hidden transition-all`}>
          <h1
            className={twAllMerge(
              !isCollapsed &&
                'overflow-hidden opacity-100 duration-300 ease-in-out text-2xl font-bold text-neutral-1 leading-none',
              isCollapsed && 'opacity-0 duration-100 ease-in-out'
            )}
          >
            이너프
          </h1>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          {isCollapsed ? (
            <IconChevronRight size={20} />
          ) : (
            <IconChevronLeft size={20} />
          )}
        </button>
      </div>

      <nav className="flex flex-col space-y-2 p-5">
        {menuItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={twAllMerge(
                `flex items-center px-3 py-2 rounded-lg transition h-9 ${
                  isActive ? 'text-primary font-semibold' : 'text-gray-400'
                }`
              )}
            >
              <div className="flex-shrink-0">
                <Icon
                  size={20}
                  className={isActive ? 'text-primary' : 'text-gray-400'}
                />
              </div>
              <span
                className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out leading-none ${
                  isCollapsed ? 'w-0 opacity-0' : 'w-32 opacity-100'
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
