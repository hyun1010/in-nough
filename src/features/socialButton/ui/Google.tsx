'use client';
import { signIn } from 'next-auth/react';
import BaseButton from './BaseButton';

const InternalGoogle = ({
  text = 'Google 계정으로 시작',
}: {
  text?: string;
}) => {
  const handleClick = () => {
    signIn('google');
  };

  return <BaseButton src={'/google.svg'} text={text} onClick={handleClick} />;
};
InternalGoogle.displayName = 'GoogleButton';
export default InternalGoogle;
