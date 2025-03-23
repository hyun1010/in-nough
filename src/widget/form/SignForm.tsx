'use client';
import {
  emailSchema,
  passwordConfirmSchema,
  passwordSchema,
  phoneNumberSchema,
  sign_defaultValues,
  SignFormType,
  usernameSchema,
} from '@/entities/form';
import { MemberTypeProps } from '@/entities/form/types';
import { PATH_NAME } from '@/shared/model';
import { Button, Form, InputField } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export function SignForm({ memberType }: MemberTypeProps) {
  console.log('🚀 ~ SignForm ~ memberType:', memberType);
  const schema = yup.object().shape({
    username: usernameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
    passwordConfirm: passwordConfirmSchema,
  });

  const methods = useForm<SignFormType<typeof memberType>>({
    resolver: yupResolver(schema),
    defaultValues: sign_defaultValues(memberType),
  });

  const handleSubmit = (form) => {
    console.log(form);
  };

  return (
    <Form
      className="h-fit max-h-[40rem] space-y-4 w-full max-w-md flex flex-col p-4"
      methods={methods}
      onSubmit={handleSubmit}
    >
      {memberType === 'company' && (
        <InputField.Single required label="회사명" name="company" readOnly />
      )}
      <InputField.Single
        required
        label="이름"
        name="username"
        placeholder="이름을 입력하세요."
      />
      <InputField.Single required label="이메일" name="email" readOnly />
      <InputField.PhoneNumber />
      <div className="space-y-1">
        <InputField.Single
          required
          label="비밀번호"
          name="password"
          placeholder="비밀번호를 입력하세요."
        />
        <InputField.Single
          required
          name="passwordConfirm"
          placeholder="비밀번호 확인을 위해 다시 한번 입력 해주세요."
        />
      </div>
      <div className="flex items-center justify-end pt-4 gap-2">
        <Button.Link
          href={PATH_NAME.HOME}
          variant="plain"
          label="취소"
          className="w-20 h-10"
        />
        <Button type="submit" label="다음" className="w-fit px-12 h-10" />
      </div>
    </Form>
  );
}
