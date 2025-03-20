import { SignForm } from '@/widget/form';

export function SignFormPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-100">
      <div className="w-[700px] h-screen p-10 bg-white">
        <h1 className="text-2xl font-bold text-center">회원가입</h1>
        <SignForm />
      </div>
    </div>
  );
}
