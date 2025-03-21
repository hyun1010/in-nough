'use client';
import { COMPANY_PATH, PATH_NAME } from '@/shared/model';
import { DividerWithText, Logo } from '@/shared/ui';
import { EmailForm } from '@/widget/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function CompanyPage() {
  const router = useRouter();
  const handleSubmit = (form) => {
    /**
     * 등록된 기업인 지 확인
     * 없다면 error
     * 있다면 routing
     */
    console.log(form);
    router.push(PATH_NAME.COMPANY(COMPANY_PATH.JOIN));
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <Logo />
      <EmailForm onSubmit={handleSubmit} />
      <DividerWithText text="또는" />
      <Link
        href={PATH_NAME.COMPANY(COMPANY_PATH.REGISTER)}
        className="bg-purple-100 text-purple-900 text-sm px-3 py-1 rounded-full hover:underline"
      >
        아직 등록된 기업이 없나요? 기업을 등록해보세요.
      </Link>
    </div>
  );
}
