import { SocialButton } from '@/features';
import { Button, DividerWithText, Tip } from '@/shared/ui';

export function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">계정 만들기</h1>
      <p className="text-gray-500 mt-1">회사 도메인 계정으로 시작합니다.</p>
      <Button.Link href={'/company'} label="기업" className="mt-3" />
      <DividerWithText text="또는" />
      <Tip message="일반 계정으로 만들기" />
      <div className="mt-4 w-full max-w-sm space-y-3">
        <SocialButton.Google />
        <SocialButton.Kakao />
        <SocialButton.Naver />
      </div>
    </div>
  );
}
