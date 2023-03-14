import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { useState } from 'react';
import { IHttpClient } from '../types/http-client';
import { IHttpClientConfig } from '../types/http-client-config';
import { RequestError } from '../types/request-error';

export function useHttpClient(props: IHttpClientConfig = {}): IHttpClient {
  const { config, jwtToken, onError } = props;
  const [requestError, setRequestError] = useState<RequestError | undefined>(
    undefined,
  );
  const instance = authorizedInstance(axios.create(config));

  function authorizedInstance(instance: AxiosInstance) {
    instance.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${jwtToken}`;
      return config;
    });
    return instance;
  }

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => handleError(error),
  );

  function handleError(error: AxiosError) {
    const { response } = error;
    console.log('Got error → ', error);
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
  }

  function handleResponse<T>(response: AxiosResponse<T>) {
    setRequestError(undefined);
    return Promise.resolve(response.data);
  }

  function get<T>(url: string, query?: Record<string, string>) {
    const params = new URLSearchParams(query);
    return instance.get<T>(url, { params }).then(handleResponse);
  }

  function post<T>(url: string, body?: object) {
    return instance.post<T>(url, body).then(handleResponse);
  }

  function put<T>(url: string, body?: object) {
    return instance.put<T>(url, body).then(handleResponse);
  }

  function deleteRequest<T>(url: string) {
    return instance.delete<T>(url).then(handleResponse);
  }

  return {
    requestError,
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
