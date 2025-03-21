'use client';
import { SocialButton } from '@/features';
import { PATH_NAME } from '@/shared/model';
import { DividerWithText } from '@/shared/ui';
import { AuthForm } from '@/widget/form';
import { signIn } from 'next-auth/react';

export function LoginPage() {
  const handleSubmit = async (form) => {
    const result = await signIn('credentials', {
      username: form.username,
      password: form.password,
      redirect: false,
      callbackUrl: PATH_NAME.WORKSPACE.MAIN,
    });
    if (result?.ok) {
      window.location.href = result.url || PATH_NAME.WORKSPACE.MAIN;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">계정으로 로그인</h1>
      <AuthForm onSubmit={handleSubmit} />
      <DividerWithText text="또는" />
      <div className="w-full max-w-sm space-y-3">
        <SocialButton.Google />
        <SocialButton.Kakao />
        <SocialButton.Naver />
      </div>
    </div>
  );
}
