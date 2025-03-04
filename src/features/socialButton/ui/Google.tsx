'use client';
import BaseButton from './BaseButton';

const InternalGoogle = ({
  text = 'Google 계정으로 시작',
}: {
  text?: string;
}) => {
  const handleClick = () => {
    console.log('click');
  };

  return <BaseButton src={'/google.svg'} text={text} onClick={handleClick} />;
};
InternalGoogle.displayName = 'GoogleButton';
export default InternalGoogle;
