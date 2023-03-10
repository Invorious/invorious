import { DeleteResult } from './delete-result';
import { RequestError } from './request-error';

export interface IHttpClient<T> {
  requestError: RequestError | undefined;
  get(url: string, query?: Record<string, string>): Promise<T>;
  post<K>(url: string, data?: Partial<T> | K): Promise<T>;
  put(url: string, data?: Partial<T>): Promise<T>;
  deleteRequest(url: string, data?: Partial<T>): Promise<DeleteResult>;
}
