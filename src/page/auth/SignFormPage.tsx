import { Logo } from '@/shared/ui';
import { SignForm } from '@/widget/form';

export function SignFormPage() {
  return (
    <div className="flex items-center justify-center min-h-[500px] h-screen bg-white p-10">
      <div className="w-[600px] h-full rounded-xl shadow-sm p-10 bg-white">
        <Logo />
        <SignForm />
      </div>
    </div>
  );
}
