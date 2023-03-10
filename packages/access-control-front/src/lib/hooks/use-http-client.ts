import axios, { AxiosError, CreateAxiosDefaults } from 'axios';
import { useState } from 'react';
import { DeleteResult } from '../types/delete-result';
import { IHttpClient } from '../types/http-client';
import { RequestError } from '../types/request-error';

export function useHttpClient<T>(
  config?: CreateAxiosDefaults<T>,
  onError?: (error: any) => void,
): IHttpClient<T> {
  const [requestError, setRequestError] = useState<RequestError | undefined>(
    undefined,
  );
  const instance = axios.create(config);

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

  function handleResponse<K>(
    data: K,
    resolve: (value: K | PromiseLike<K>) => void,
  ) {
    setRequestError(undefined);
    return resolve(data);
  }

  function get(url: string, query?: Record<string, string>) {
    const params = new URLSearchParams(query);
    return new Promise<T>((resolve, reject) => {
      instance.get<T>(url, { params }).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function post<K>(url: string, data?: Partial<T> | K) {
    return new Promise<T>((resolve, reject) => {
      instance.post<T>(url, data).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function put(url: string, data?: Partial<T>) {
    return new Promise<T>((resolve, reject) => {
      instance.put<T>(url, data).then(
        (response) => handleResponse(response.data, resolve),
        (error: AxiosError) => handleError(error, reject),
      );
    });
  }

  function deleteRequest(url: string, data?: Partial<T>) {
    return new Promise<DeleteResult>((resolve, reject) => {
      instance.delete<DeleteResult>(url, { data }).then(
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
