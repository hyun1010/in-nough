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
