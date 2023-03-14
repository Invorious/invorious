import axios, { AxiosError, AxiosInstance } from 'axios';
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

    return setRequestError(
      response
        ? { statusCode: response.status, message: response.statusText }
        : undefined,
    );
  }

  function handleResponse<T>(
    data: T,
    resolve: (value: T | PromiseLike<T>) => void,
  ) {
    setRequestError(undefined);
    return resolve(data);
  }

  function get<T>(url: string, query?: Record<string, string>) {
    const params = new URLSearchParams(query);
    return new Promise<T>((resolve) => {
      instance
        .get<T>(url, { params })
        .then((response) => handleResponse(response.data, resolve));
    });
  }

  function post<T>(url: string, body?: object) {
    return new Promise<T>((resolve) =>
      instance
        .post<T>(url, body)
        .then((response) => handleResponse(response.data, resolve)),
    );
  }

  function put<T>(url: string, body?: object) {
    return new Promise<T>((resolve) =>
      instance
        .put<T>(url, body)
        .then((response) => handleResponse(response.data, resolve)),
    );
  }

  function deleteRequest<T>(url: string) {
    return new Promise<T>((resolve) =>
      instance
        .delete<T>(url)
        .then((response) => handleResponse(response.data, resolve)),
    );
  }

  return {
    requestError,
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
