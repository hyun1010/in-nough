'use client';
import { ProfilePicture } from '@/features';
import { Button, Icon, Input } from '@/shared/ui';
import { IconSearch } from '@/shared/ui/icon/IconSearch';
import { useSession } from 'next-auth/react';

export default function Index() {
  const { data: session } = useSession();

  return (
    <header className="w-full bg-neutral-4 min-h-20 h-20 flex items-center justify-between border-b border-gray-100 px-10">
      <h1 className="text-title text-neutral-1 truncate">All Projects</h1>
      <div className="flex-1 flex justify-center">
        <Input
          className="h-11 w-96 bg-neutral-3 "
          placeholder="Search"
          suffixIcon={
            <IconSearch className="stroke-1.5 group-focus-within:stroke-primary" />
          }
        />
      </div>
      <div className="flex items-center justify-center gap-2 mr-5">
        <Button
          variant="plain"
          shape="rounded"
          prefixIcon={<Icon.Alarm className="w-5 h-5" />}
          className="w-9 h-9 p-0"
        />
        <Button
          variant="plain"
          shape="rounded"
          prefixIcon={<Icon.Alarm className="w-5 h-5" />}
          className="w-9 h-9 p-0"
        />
      </div>
      {session && (
        <ProfilePicture src={session?.user?.image ?? '/'} alt="프로필 사진" />
      )}
    </header>
  );
}
