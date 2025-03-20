'use client';
import { phoneNumberSchema, usernameSchema } from '@/entities/form/rules';
import { Button, Form, Input } from '@/shared/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export function SignForm() {
  const schema = yup.object().shape({
    username: usernameSchema,
    phoneNumber: phoneNumberSchema,
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
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
      <Form.Field>
        <Form.Label required>이름</Form.Label>
        <Form.Content
          name="username"
          render={({ field }) => (
            <Input
              {...field}
              className="bg-white w-full text-body_nomal px-4 h-10"
              placeholder="이름을 입력하세요."
            />
          )}
        />
      </Form.Field>
      <Form.Field>
        <Form.Label required>핸드폰 번호</Form.Label>
        <div className="flex items-center gap-2">
          <Form.Content
            name="phoneNumber.start"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                maxLength={3}
                className="bg-white text-body_nomal px-4 h-10 w-16 tabular-nums"
                placeholder="010"
              />
            )}
          />
          <div className="p-1 text-gray-600">-</div>
          <Form.Content
            name="phoneNumber.middle"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                maxLength={4}
                className="bg-white text-body_nomal px-4 h-10 w-[72px] tabular-nums"
                placeholder="1234"
              />
            )}
          />
          <div className="p-1 text-gray-600">-</div>
          <Form.Content
            name="phoneNumber.end"
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                maxLength={4}
                className="bg-white text-body_nomal px-4 h-10 w-[72px] tabular-nums"
                placeholder="5678"
              />
            )}
          />
        </div>
      </Form.Field>
      <Form.Field className="flex flex-row items-center justify-between">
        <Button.Link
          href="/signup"
          variant="plain"
          className="w-32 h-10"
          label="취소"
        />
        <Button type="submit" className="w-32 h-10" label="계속" />
      </Form.Field>
    </Form>
  );
}
