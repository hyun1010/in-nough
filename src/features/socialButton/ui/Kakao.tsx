'use client';
import { signIn } from 'next-auth/react';
import BaseButton from './BaseButton';

const InternalKaKao = ({
  text = '카카오 계정으로 시작',
}: {
  text?: string;
}) => {
  const handleClick = () => {
    signIn('kakao');
  };

  return (
    <BaseButton
      src={'/kakao.png'}
      text={text}
      onClick={handleClick}
      className="bg-social-kakao border-social-kakao text-social-kakao_text"
    />
  );
};
InternalKaKao.displayName = 'KakaoButton';
export default InternalKaKao;
