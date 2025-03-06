import { SocialButton } from '@/features';
import { Button, DividerWithText, Input } from '@/shared/ui';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-2xl font-bold">계정으로 로그인</h1>
      <div className="mt-6 w-full flex flex-col gap-2 max-w-sm">
        <Input className="bg-white w-96" placeholder="아이디" />
        <Input
          type="password"
          className="bg-white w-96"
          placeholder="비밀번호"
        />
        <Button disabled label="로그인" className="w-96" />
      </div>
      <DividerWithText text="또는" />
      <div className="w-full max-w-sm space-y-3">
        <SocialButton.Google />
        <SocialButton.Kakao />
        <SocialButton.Naver />
      </div>
    </div>
  );
}
