import { Button } from '@/shared/ui';

export default function SignupButtons() {
  return (
    <div className="mt-6 w-full flex gap-2 max-w-sm">
      <Button.Link href="/signup/company" label="기업" className="w-96" />
      <Button.Link
        href="/signup/personal"
        variant="secondary"
        label="일반"
        className="w-96"
      />
    </div>
  );
}
