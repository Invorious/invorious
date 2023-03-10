import axios, { AxiosError, AxiosInstance } from 'axios';
import { useState } from 'react';
import { IHttpClient } from '../types/http-client';
import { IHttpClientConfig } from '../types/http-client-config';
import { RequestError } from '../types/request-error';

export function useHttpClient(props: IHttpClientConfig): IHttpClient {
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

  function handleError(
    error: AxiosError,
    reject: (reason?: AxiosError) => void,
  ) {
    const { response } = error;
    setRequestError(
      response
        ? { statusCode: response.status, message: response.statusText }
        : undefined,
    );
    onError?.(error);
    return reject(error);
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
    return new Promise<T>((resolve, reject) => {
      instance.get<T>(url, { params }).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function post<T>(url: string, body?: object) {
    return new Promise<T>((resolve, reject) => {
      instance.post<T>(url, body).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function put<T>(url: string, body?: object) {
    return new Promise<T>((resolve, reject) => {
      instance.put<T>(url, body).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function deleteRequest<T>(url: string) {
    return new Promise<T>((resolve, reject) => {
      instance.delete<T>(url).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  return {
    requestError,
    get,
    post,
    put,
    delete: deleteRequest,
  };
}
