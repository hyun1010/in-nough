'use client';
import { IconExclamationCircleFilled } from '@tabler/icons-react';
import { useId } from 'react';
import { Tooltip } from 'react-tooltip';
import Form from '../form';
import Input from '../input';

export default function PhoneField({
  errorMessage,
}: {
  errorMessage?: string;
}) {
  const id = useId();
  return (
    <Form.Field>
      <Form.Label required>핸드폰 번호</Form.Label>
      <div className="relative flex items-center gap-2">
        <Form.Content
          name="phoneNumber.start"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={3}
              className="h-10 w-20 grow-0 bg-white px-4 text-body_nomal tabular-nums"
              placeholder="010"
            />
          )}
        />
        <div className="p-1.5 text-gray-600">-</div>
        <Form.Content
          name="phoneNumber.middle"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={4}
              className="h-10 w-24 grow-0 basis-1/3 bg-white px-4 text-body_nomal tabular-nums"
              placeholder="1234"
            />
          )}
        />
        <div className="p-1.5 text-gray-600">-</div>
        <Form.Content
          name="phoneNumber.end"
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              maxLength={4}
              className="h-10 w-24 grow-0 basis-1/3 bg-white px-4 text-body_nomal tabular-nums"
              placeholder="5678"
            />
          )}
        />
        {errorMessage && (
          <>
            <div
              data-tooltip-id={`tooltip_${id}`}
              className="absolute right-0 mr-2 text-primary-600"
            >
              <IconExclamationCircleFilled size={20} />
            </div>
            <Tooltip id={`tooltip_${id}`} place="top" content={errorMessage} />
          </>
        )}
      </div>
    </Form.Field>
  );
}
