import { CreateAxiosDefaults } from 'axios';
import * as ethers from 'ethers';
import { useHttpClient } from '@invorious/http-client-front';

import { ILoginResponse } from '../types/login-response.interface';
import { IMetamaskStrategy } from '../types/metamask-strategy.interface';

export function useMetamaskStrategy(
  config?: CreateAxiosDefaults,
): IMetamaskStrategy {
  const { post, requestError } = useHttpClient({
    config,
  });

  async function login<T extends ILoginResponse | { errorCode: string }>(
    message: string,
  ) {
    const { ethereum } = window as any;
    const provider = new ethers.BrowserProvider(ethereum);
    const signer = await provider.getSigner();
    const signature = (await signer.signMessage(message)) ?? '';
    return await post<T>('/connect', { signature });
  }

  return {
    login,
    requestError,
  };
}
