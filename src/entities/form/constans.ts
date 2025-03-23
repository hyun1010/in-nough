import { MemberType } from '@/shared/model';
import { CompanySignType, SignBaseTypes } from './types';

const sign_baseValues = {
  username: '',
  email: '',
  phoneNumber: {
    start: '',
    middle: '',
    end: '',
  },
  password: '',
  passwordConfirm: '',
} as SignBaseTypes;

export const sign_defaultValues = (memberType: MemberType) => {
  if (memberType === 'company')
    return {
      ...sign_baseValues,
      company: '',
    } as CompanySignType;
  return sign_baseValues;
};
