import { useHttpClient } from '@invorious/http-client-front';
import { CreateAxiosDefaults } from 'axios';
import { IUserManagement } from '../types/user-management.interface';

export function useUserManagement(
  config?: CreateAxiosDefaults,
): IUserManagement {
  const {
    post,
    requestError,
    get,
    put,
    delete: deleteRequest,
  } = useHttpClient({
    config: {
      ...config,
      baseURL: 'api/auth',
    },
  });
  async function register<T>(data: Partial<T>) {
    return await post<T>('/register', {
      ...data,
    });
  }

  async function getProfile<T>() {
    return await get<T>('/me');
  }

  async function update<T>(data: Partial<T>) {
    return await put<T>('/me', {
      ...data,
    });
  }

  async function deleteProfile<T = void>(id: number) {
    return await deleteRequest<T>(`/delete/${id}`);
  }
  return {
    register,
    requestError,
    getProfile,
    update,
    deleteProfile,
  };
}
