import { SignupButtons, SocialButton } from '@/features';
import { DividerWithText, Tip } from '@/shared/ui';

export function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">계정 만들기</h1>
      <p className="text-gray-500 mt-1">프로젝트에 초대받아 시작합니다.</p>
      <SignupButtons />
      <DividerWithText text="또는" />
      <Tip message="3초 만에 시작하기" />
      <div className="mt-4 w-full max-w-sm space-y-3">
        <SocialButton.Google />
        <SocialButton.Kakao />
        <SocialButton.Naver />
      </div>
    </div>
  );
}
