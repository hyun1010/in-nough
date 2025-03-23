import { MemberTypeProps } from '@/entities/form/types';
import { FormLayout, SignForm } from '@/widget/form';

export function JoinPage({ memberType }: MemberTypeProps) {
  return (
    <FormLayout>
      <SignForm memberType={memberType} />
    </FormLayout>
  );
}
