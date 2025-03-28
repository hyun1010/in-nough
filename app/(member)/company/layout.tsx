import React from 'react';

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="h-full w-full">
      {children}
      {modal}
    </div>
  );
}
