import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export function resolver<T extends yup.ObjectShape>(data: T) {
  const schema = yup.object().shape(data);

  return yupResolver(schema);
}
