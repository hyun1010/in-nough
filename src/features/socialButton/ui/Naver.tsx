'use client';
import { signIn } from 'next-auth/react';
import BaseButton from './BaseButton';

const InternalNaver = ({
  text = '네이버 계정으로 시작',
}: {
  text?: string;
}) => {
  const handleClick = () => {
    signIn('naver');
  };

  return (
    <BaseButton
      src={'/naver.png'}
      text={text}
      onClick={handleClick}
      className="bg-social-naver border-social-naver text-white "
    />
  );
};
InternalNaver.displayName = 'NaverButton';
export default InternalNaver;
