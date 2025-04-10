import * as yup from 'yup';

export const phoneNumberSchema = yup.object().shape({
  start: yup
    .string()
    .matches(/^[0-9]{3}$/, '올바른 번호를 입력해 주세요.')
    .required('전화번호 시작자리를 입력해 주세요'),
  middle: yup
    .string()
    .matches(/^[0-9]{4}$/, '올바른 번호를 입력해 주세요.')
    .required('전화번호 중간자리를 입력해 주세요'),
  end: yup
    .string()
    .matches(/^[0-9]{4}$/, '올바른 번호를 입력해 주세요.')
    .required('전화번호 끝자리를 입력해 주세요'),
});

export const usernameSchema = yup
  .string()
  .min(2, '사용자 이름은 2글자 이상이어야 합니다')
  .required('이름을 입력해 주세요');

export const emailSchema = yup
  .string()
  .email('올바른 이메일 형식이 아닙니다.')
  .required('이메일을 입력해 주세요');

export const passwordSchema = yup
  .string()
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*?]{8,}$/,
    '비밀번호는 영문자, 숫자, !@#$%^&*? 중 하나 이상의 특수문자를 포함해야 하며 최소 8자 이상이어야 합니다.'
  )
  .required('비밀번호를 입력해 주세요');

export const passwordConfirmSchema = yup
  .string()
  .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
  .required('비밀번호를 다시 입력해 주세요');
