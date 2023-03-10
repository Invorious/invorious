import { AxiosError, CreateAxiosDefaults } from 'axios';

export interface IHttpClientConfig {
  config?: CreateAxiosDefaults;
  jwtToken?: string;
  onError?: (error: AxiosError) => void;
}
