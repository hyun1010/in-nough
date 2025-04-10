import { COMPANY_PATH, PATH_NAME } from '@/shared/model';
import { Button } from '@/shared/ui';

export default function Home() {
  return (
    <div className="flex items-center gap-2 w-screen h-screen justify-center">
      <Button.Link variant="plain" href={PATH_NAME.AUTH.LOGIN} label="로그인" />
      <Button.Link
        variant="secondary"
        href={PATH_NAME.AUTH.SIGNUP}
        label="회원가입"
      />
      <Button.Link
        variant="primary"
        href={PATH_NAME.COMPANY(COMPANY_PATH.ROOT)}
        label="기업으로 가입"
      />
    </div>
  );
}
