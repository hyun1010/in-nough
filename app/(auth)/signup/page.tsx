import { SocialButton } from '@/features';
import { Button, DividerWithText, Input, Tip } from '@/shared/ui';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">게스트 계정 만들기</h1>
      <p className="text-gray-500 mt-1">프로젝트에 초대받아 시작합니다.</p>
      <div className="mt-6 w-full flex flex-col gap-2 max-w-sm">
        <Input label="회사 이메일" className="bg-white w-96" />
        <Button disabled label="다음" className="w-96" />
      </div>
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
