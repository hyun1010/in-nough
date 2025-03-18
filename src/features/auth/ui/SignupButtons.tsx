'use client';
import { Button } from '@/shared/ui';
import { useRouter } from 'next/navigation';

export default function SignupButtons() {
  const router = useRouter();

  const handleClick = (type: 'company' | 'personal') => {
    router.push(`/signup?${type}`);
  };

  return (
    <div className="mt-6 w-full flex gap-2 max-w-sm">
      <Button
        label="기업"
        className="w-96"
        onClick={() => handleClick('company')}
      />
      <Button
        variant="secondary"
        label="일반"
        className="w-96"
        onClick={() => handleClick('personal')}
      />
    </div>
  );
}
