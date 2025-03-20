import { Button } from '@/shared/ui';

export default function Home() {
  return (
    <div className="flex items-center gap-2 w-screen h-screen justify-center">
      <Button.Link variant="primary" href="/login" label="로그인" />
      <Button.Link variant="secondary" href="/signup" label="회원가입" />
    </div>
  );
}
