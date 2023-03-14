import { useHttpClient } from '@invorious/http-client-front';
import { IUserManagement } from '../types/user-management.interface';

export function useUserManagement(token?: string | null): IUserManagement {
  const { post } = useHttpClient({
    config: {
      baseURL: 'api/auth',
    },
    jwtToken: token,
  });
  async function register<T>(data: Partial<T>) {
    return await post<T>('/register', {
      ...data,
    });
  }

  return {
    register,
  };
}
