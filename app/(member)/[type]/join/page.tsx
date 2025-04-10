import { JoinPage } from '@/page/member';
import { MemberType } from '@/shared/model';
import { notFound } from 'next/navigation';

export default async function page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  const validSlugs = ['personal', 'company'];
  if (!validSlugs.includes(type)) {
    return notFound();
  }
  return <JoinPage memberType={type as MemberType} />;
}
