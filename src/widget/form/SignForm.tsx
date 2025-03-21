'use client';
import {
  emailSchema,
  phoneNumberSchema,
  usernameSchema,
} from '@/entities/form/rules';
import { MemberType } from '@/shared/model';
import { Form, InputField } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type SignFormType<T extends MemberType> = T extends 'company'
  ? {
      username: string;
      email: string;
      phoneNumber: {
        start: string;
        middle: string;
        end: string;
      };
      company: string;
      department?: string;
      position?: string;
      profile?: string;
    }
  : {
      username: string;
      email: string;
      phoneNumber: {
        start: string;
        middle: string;
        end: string;
      };
    };

interface SignFormProps {
  memberType: MemberType;
}
export function SignForm({ memberType }: SignFormProps) {
  console.log('🚀 ~ SignForm ~ memberType:', memberType);
  const schema = yup.object().shape({
    username: usernameSchema,
    email: emailSchema,
    phoneNumber: phoneNumberSchema,
  });

  const methods = useForm<SignFormType<typeof memberType>>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      phoneNumber: {
        start: '',
        middle: '',
        end: '',
      },
    },
  });

  const handleSubmit = (form) => {
    console.log(form);
  };

  return (
    <Form methods={methods} onSubmit={handleSubmit}>
      <InputField.Single
        required
        label="이름"
        name="username"
        placeholder="이름을 입력하세요."
      />
      <InputField.PhoneNumber />
    </Form>
  );
}
