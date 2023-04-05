import axios, { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';
import { IHttpClient } from '../types/http-client';
import { IHttpClientConfig } from '../types/http-client-config';
import { RequestError } from '../types/request-error';

export function useHttpClient(props: IHttpClientConfig = {}): IHttpClient {
  const { config, onError } = props;
  const [requestError, setRequestError] = useState<RequestError | undefined>(
    undefined,
  );
  const instance = axios.create(config);

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => handleError(error),
  );

  const handleError = useCallback(
    async (error: AxiosError) => {
      const { response } = error;
      onError?.(error);
      if (response?.status === 401) {
        return setRequestError({
          statusCode: response.status,
          message: `Unathorized, make sure you're currently logged in`,
        });
      }

      if (response?.status && response.status >= 500) {
        return setRequestError({
          statusCode: response.status,
          message: 'Server error',
        });
      }
      setRequestError(
        response
          ? { statusCode: response.status, message: response.statusText }
          : undefined,
      );
      return Promise.reject(error);
    },
    [onError],
  );

  const handleResponse = useCallback(async <T>(response: AxiosResponse<T>) => {
    setRequestError(undefined);
    return Promise.resolve(response.data);
  }, []);

  const get = useCallback(
    async <T>(url: string, query?: Record<string, string>) => {
      const params = new URLSearchParams(query);
      return instance.get<T>(url, { params }).then(handleResponse);
    },
    [handleResponse, instance],
  );

  const post = useCallback(
    async <T>(url: string, body?: object) =>
      instance.post<T>(url, body).then(handleResponse),
    [handleResponse, instance],
  );

  const put = useCallback(
    async <T>(url: string, body?: object) =>
      instance.put<T>(url, body).then(handleResponse),
    [handleResponse, instance],
  );

  const deleteRequest = useCallback(
    async <T>(url: string) => instance.delete<T>(url).then(handleResponse),
    [handleResponse, instance],
  );

  return {
    requestError,
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
