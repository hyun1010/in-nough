import { api } from '@/shared/utils';
import { LoginRequest, LoginResponse } from '../model/types';

export const postLogin = async (
  params: LoginRequest
): Promise<LoginResponse> => {
  return await api.post('/api/auth/login', {
    ...params,
  });
};
