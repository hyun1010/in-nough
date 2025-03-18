import { useMutation } from '@tanstack/react-query';
import { postLogin } from '../api/service';
import { LoginRequest } from '../model/types';

export default function useAuth() {
  const login = useMutation({
    mutationFn: async (params: LoginRequest) => {
      return await postLogin(params);
    },
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      return error;
    },
  });

  return { login };
}
