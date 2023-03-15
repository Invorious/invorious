import { useHttpClient } from '@invorious/http-client-front';
import { CreateAxiosDefaults } from 'axios';
import { ILoginResponse } from '../types/login-response.interface';
import { ILocalStrategy } from '../types/local-strategy.interface';

export function useLocalStrategy(config?: CreateAxiosDefaults): ILocalStrategy {
  const { post, requestError } = useHttpClient({
    config,
  });
  async function login<T extends ILoginResponse>(
    username: string,
    password: string,
  ) {
    const response = await post<T>('/login', {
      username,
      password,
    });
    return response;
  }

  return {
    login,
    requestError,
  };
}
