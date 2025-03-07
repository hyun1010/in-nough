import { Button } from '@/shared/ui';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen min-h-[430px]">
      <div className="grow flex flex-col justify-center items-center bg-white p-10">
        {children}
      </div>
      <div className="hidden md:flex md:w-3/5 bg-gradient-to-l from-purple-500 to-primary-600 flex-col justify-center items-center text-white p-10">
        <h1 className="text-4xl font-bold mb-5">이너-프</h1>
        <p className="mt-1 mb-6 text-center">가장 완벽한 일정 관리 프로세스</p>
        <Button
          variant="ghost"
          label="Read More"
          shape="rounded"
          className="w-44 h-12"
        />
      </div>
    </div>
  );
}
