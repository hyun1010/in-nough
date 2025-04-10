'use client';
import { ProfilePicture } from '@/features';
import { Button, Input } from '@/shared/ui';
import { IconBell, IconSearch } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';

export function Header() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white min-h-20 h-20 flex items-center justify-between border-b border-gray-300 px-6">
      <h1 className="text-title text-gray-900 truncate">내 프로젝트</h1>
      <div className="flex-1 flex justify-center">
        <Input
          className="h-11 w-96"
          placeholder="Search"
          suffixIcon={
            <IconSearch className="stroke-1.5 stroke-gray-500 group-focus-within:stroke-primary-500" />
          }
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          shape="rounded"
          prefixIcon={<IconBell className="w-8 h-8 stroke-1 stroke-gray-600" />}
        />
        <ProfilePicture src={session?.user?.image ?? '/'} alt="프로필 사진" />
      </div>
    </header>
  );
}
