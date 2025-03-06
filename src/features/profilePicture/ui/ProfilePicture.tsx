import Image from 'next/image';
import React from 'react';

interface ProfilePictureProps {
  src: string;
  alt: string;
}

const InternalProfilePicture: React.FC<ProfilePictureProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="w-11 h-11 rounded-full overflow-hidden relative cursor-pointer">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default InternalProfilePicture;
