'use client';
import { ProfilePicture } from '@/features';
import { Button, Icon, Input } from '@/shared/ui';
import { IconSearch } from '@/shared/ui/icon/IconSearch';
import { useSession } from 'next-auth/react';

export default function Index() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-white min-h-20 h-20 flex items-center justify-between border-b border-gray-100 px-6">
      <h1 className="text-title text-neutral-1 truncate">내 프로젝트</h1>
      <div className="flex-1 flex justify-center">
        <Input
          className="h-11 w-96"
          placeholder="Search"
          suffixIcon={
            <IconSearch className="stroke-1.5 group-focus-within:stroke-primary" />
          }
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          shape="rounded"
          prefixIcon={<Icon.Alarm className="w-6 h-6" />}
        />
        <ProfilePicture src={session?.user?.image ?? '/'} alt="프로필 사진" />
      </div>
    </header>
  );
}
