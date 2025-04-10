'use client';
import { COMPANY_PATH, PATH_NAME } from '@/shared/model';
import { useModalStore } from '@/shared/store';
import { DividerWithText } from '@/shared/ui';
import { EmailForm, FormLayout } from '@/widget/form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function CompanyPage() {
  const router = useRouter();
  const { openModal } = useModalStore();
  const handleSubmit = (form) => {
    /**
     * 등록된 기업인 지 확인
     * 없다면 error
     * 있다면 routing
     */
    console.log(form);
    router.push(PATH_NAME.COMPANY(COMPANY_PATH.JOIN));
  };

  const handleShowModal = () => {
    openModal('register');
  };

  return (
    <FormLayout>
      <EmailForm onSubmit={handleSubmit} />
      <DividerWithText text="또는" />
      <Link
        href={PATH_NAME.COMPANY(COMPANY_PATH.REGISTER)}
        className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-900 hover:underline"
        onClick={handleShowModal}
      >
        아직 등록된 기업이 없나요? 기업을 등록해보세요.
      </Link>
    </FormLayout>
  );
}
