import { useHttpClient } from '@invorious/http-client-front';
import { IUserManagement } from '../types/user-management.interface';

export function useUserManagement(): IUserManagement {
  const { post, requestError } = useHttpClient({
    config: {
      baseURL: 'api/auth',
    },
  });
  async function register<T>(data: Partial<T>) {
    return await post<T>('/register', {
      ...data,
    });
  }

  return {
    register,
    requestError,
  };
}
