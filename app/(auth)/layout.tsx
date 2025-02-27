import { Button } from '@/shared/ui';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-b from-secondary to-primary flex flex-col justify-center items-center text-white p-10">
        <h1 className="text-3xl font-bold">이너-프</h1>
        <p className="mt-1 mb-6 text-center">
          The most popular peer to peer lending at SEA
        </p>
        <Button variant="ghost" label="Read More" shape="rounded" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        {children}
      </div>
    </div>
  );
}
