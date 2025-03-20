import { LoginForm, SocialButton } from '@/features';
import { DividerWithText } from '@/shared/ui';

export function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">계정으로 로그인</h1>
      <LoginForm />
      <DividerWithText text="또는" />
      <div className="w-full max-w-sm space-y-3">
        <SocialButton.Google />
        <SocialButton.Kakao />
        <SocialButton.Naver />
      </div>
    </div>
  );
}
