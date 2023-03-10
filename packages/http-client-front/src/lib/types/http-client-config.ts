import { AxiosError, CreateAxiosDefaults } from 'axios';

export interface IHttpClientConfig {
  config?: CreateAxiosDefaults;
  jwtToken?: string | null;
  onError?: (error: AxiosError) => void;
}
