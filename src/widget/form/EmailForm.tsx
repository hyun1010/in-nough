'use client';
import { emailSchema } from '@/entities/form/rules';
import { Button, Form, Input } from '@/shared/ui';
import { cn, resolver } from '@/shared/utils';
import { useForm } from 'react-hook-form';

interface IdentityFormProps {
  label?: string;
  className?: string;
  onSubmit: (form) => void;
}

interface FormType {
  email: string;
}

export function EmailForm({
  label = '이메일을 입력해주세요.',
  className,
  onSubmit,
}: IdentityFormProps) {
  const methods = useForm<FormType>({
    resolver: resolver({
      email: emailSchema,
    }),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });

  const {
    formState: { isValid },
  } = methods;

  return (
    <Form
      className={cn(
        'h-fit space-y-3 w-full max-w-md flex flex-col items-center p-0 py-4',
        className
      )}
      onSubmit={onSubmit}
      methods={methods}
    >
      <Form.Content
        name={'email'}
        render={({ field, fieldState }) => (
          <>
            <Input {...field} label={label} className="bg-white w-96" />
            {fieldState?.error && (
              <Form.Description
                descrition={fieldState.error.message}
                className="w-96"
                status="warn"
              />
            )}
          </>
        )}
      />
      <Button
        type="submit"
        label={'다음'}
        className={cn('w-96', {
          'bg-primary-800/60 hover:bg-primary-800/60 active:bg-primary-800/60':
            !isValid,
        })}
      />
    </Form>
  );
}
