import { CreateAxiosDefaults } from 'axios';
import * as ethers from 'ethers';
import { useHttpClient } from '@invorious/http-client-front';

import { ILoginResponse } from '../types/login-response.interface';

export function useMetamaskStrategy(config?: CreateAxiosDefaults) {
  const { post } = useHttpClient({
    config,
  });

  async function login<T extends ILoginResponse>(message: string) {
    try {
      const { ethereum } = window as any;
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      const signature = (await signer.signMessage(message)) ?? '';
      return await post<T>('/connect', { signature });
    } catch {
      return {
        errorCode: 'SIGNING_FAILED',
        message: 'There was an error while signing the login message.',
      };
    }
  }

  return {
    login,
  };
}
