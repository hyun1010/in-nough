'use client';
import { Button, Form, Input } from '@/shared/ui';

export function SignFormPage() {
  const defaultValues = {
    usename: '',
    phoneNumber: {
      start: '',
      middle: '',
      end: '',
    },
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-100">
      <div className="w-[700px] h-screen p-10 bg-white">
        <h1 className="text-2xl font-bold text-center">회원가입</h1>
        <Form onSubmit={() => {}} formOptions={{ defaultValues }}>
          <Form.Field>
            <Form.Label required>이름</Form.Label>
            <Form.Content
              name="username"
              render={({ field }) => (
                <Input
                  {...field}
                  className="bg-white w-full text-body_nomal px-4"
                  placeholder="이름을 입력하세요."
                />
              )}
            />
          </Form.Field>
          <Form.Field>
            <Form.Label required>핸드폰 번호</Form.Label>
            <Form.Content
              name="username"
              render={({ field }) => (
                <Input
                  {...field}
                  className="bg-white w-full text-body_nomal px-4"
                  placeholder="이름을 입력하세요."
                />
              )}
            />
          </Form.Field>
          <Form.Field className="flex flex-row items-center justify-between">
            <Button variant="plain" className="w-32 h-10" label="취소" />
            <Button className="w-32 h-10" label="계속" />
          </Form.Field>
        </Form>
      </div>
    </div>
  );
}
