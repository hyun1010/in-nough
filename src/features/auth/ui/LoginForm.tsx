'use client';
import { Button, Input } from '@/shared/ui';
import { signIn } from 'next-auth/react';
import { Controller, useForm } from 'react-hook-form';
import { LoginRequest } from '../model/types';

export default function LoginForm() {
  const { handleSubmit: onSubmit, control } = useForm<LoginRequest>({
    shouldUnregister: true,
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'all',
  });

  const handleSubmit = async (form) => {
    const result = await signIn('credentials', {
      username: form.username,
      password: form.password,
      redirect: false, // 자동 리디렉션 방지
      callbackUrl: '/main', // 리디렉션할 URL 명시
    });
    console.log('🚀 ~ handleSubmit ~ result:', result);
    if (result?.ok) {
      window.location.href = result.url || '/main'; // 명시적 리디렉션
    }
  };

  return (
    <form
      className="mt-6 w-full flex flex-col gap-2 max-w-sm"
      onSubmit={onSubmit(handleSubmit)}
    >
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input
            ref={field.ref}
            value={field.value}
            onChange={field.onChange}
            className="bg-white w-96"
            placeholder="아이디"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
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
      <Button type="submit" label="로그인" className="w-96" />
    </form>
  );
}
