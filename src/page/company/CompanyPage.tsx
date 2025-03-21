'use client';
import { DividerWithText, Logo } from '@/shared/ui';
import { EmailForm } from '@/widget/form';
import Link from 'next/link';

export function CompanyPage() {
  const handleSubmit = (form) => {
    console.log(form);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <Logo />
      <EmailForm onSubmit={handleSubmit} />
      <DividerWithText text="또는" />
      <Link
        href={'/company/register'}
        className="bg-purple-100 text-purple-900 text-sm px-3 py-1 rounded-full hover:underline"
      >
        아직 등록된 기업이 없나요? 기업을 등록해보세요.
      </Link>
    </div>
  );
}
