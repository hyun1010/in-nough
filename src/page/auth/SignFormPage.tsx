import { SignForm } from '@/widget/form';

export function SignFormPage() {
  return (
    <div className="flex items-center justify-center min-h-[500px] h-screen bg-primary-100 p-10">
      <div className="w-[600px] h-full rounded-xl shadow-sm p-10 bg-white">
        <h1 className="text-2xl font-bold text-center">회원가입</h1>
        <SignForm />
      </div>
    </div>
  );
}
