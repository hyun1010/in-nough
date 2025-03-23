import { MemberType } from '@/shared/model';

export interface SignBaseTypes {
  username: string;
  email: string;
  phoneNumber: {
    start: string;
    middle: string;
    end: string;
  };
  password: string;
  passwordConfirm: string;
  profile?: string;
}

export interface CompanySignType extends SignBaseTypes {
  company: string;
  department?: string;
  position?: string;
}

export type SignFormType<T extends MemberType> = T extends 'company'
  ? CompanySignType
  : SignBaseTypes;

export interface MemberTypeProps {
  memberType: MemberType;
}
