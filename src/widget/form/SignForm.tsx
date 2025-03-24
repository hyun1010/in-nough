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
import { company_list } from '@/entities/mocks';
import { PATH_NAME } from '@/shared/model';
import { Button, Form, InputField, SelectField } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export function SignForm({ memberType }: MemberTypeProps) {
  const schema = yup.object().shape({
    name: usernameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
    password: passwordSchema,
    passwordConfirm: passwordConfirmSchema,
    company:
      memberType === 'company'
        ? yup.string().required('회사명을 입력하세요.')
        : yup.string(),
  });

  const methods = useForm<SignFormType<typeof memberType>>({
    resolver: yupResolver(schema),
    defaultValues: sign_defaultValues(memberType),
  });

  const {
    formState: { errors },
  } = methods;

  console.log('🚀 ~ SignForm ~ errors:', errors);
  const handleSubmit = (form) => {
    console.log(form);
  };

  return (
    <Form
      className="flex h-fit max-h-[40rem] w-full max-w-md flex-col space-y-4 p-4"
      methods={methods}
      onSubmit={handleSubmit}
    >
      {memberType === 'company' && (
        <SelectField.Filter
          required
          label="회사명"
          name="company"
          options={company_list}
          placeholder="회사를 선택하세요."
        />
      )}
      <InputField.Single
        required
        label="이름"
        name="name"
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
      <div className="flex items-center justify-end gap-2 pt-4">
        <Button.Link
          href={PATH_NAME.HOME}
          variant="plain"
          label="취소"
          className="h-10 w-20"
        />
        <Button type="submit" label="다음" className="h-10 w-fit px-12" />
      </div>
    </Form>
  );
}
