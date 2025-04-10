'use client';
import { CredentialType } from '@/entities/auth';
import { Button, Form, Input } from '@/shared/ui';
import { cn } from '@/shared/utils';
import { useForm } from 'react-hook-form';

interface AuthFormProps {
  className?: string;
  onSubmit: (form) => void;
  submitBtnLabel?: string;
}

export function AuthForm({
  className,
  onSubmit,
  submitBtnLabel = '로그인',
}: AuthFormProps) {
  const methods = useForm<CredentialType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <Form
      className={cn('h-fit space-y-2 pt-4 pb-2', className)}
      onSubmit={onSubmit}
      methods={methods}
    >
      <Form.Content
        name={'email'}
        render={({ field }) => (
          <Input {...field} className="bg-white w-96" placeholder="아이디" />
        )}
      />
      <Form.Content
        name={'password'}
        render={({ field }) => (
          <Input
            type="password"
            ref={field.ref}
            value={field.value}
            onChange={field.onChange}
            className="bg-white w-96"
            placeholder="비밀번호"
          />
        )}
      />
      <Button type="submit" label={submitBtnLabel} className="w-96" />
    </Form>
  );
}
