'use client';
import { Logo } from '@/shared/ui';
import { EmailForm } from '@/widget/form';

export function SignFormPage() {
  const handleSubmit = (form) => {
    console.log(form);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <Logo />
      <EmailForm onSubmit={handleSubmit} />
    </div>
  );
}
