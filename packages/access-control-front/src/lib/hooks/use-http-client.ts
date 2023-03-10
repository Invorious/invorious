import axios, { CreateAxiosDefaults } from 'axios';
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
    error: RequestError,
    reject: (reason: RequestError) => void,
  ) {
    setRequestError(error);
    onError?.(error);
    reject(error);
  }

  function get(url: string, query?: Record<string, string>) {
    const params = new URLSearchParams(query);
    return new Promise<T>((resolve, reject) => {
      instance.get<T>(url, { params }).then(
        (response) => resolve(response.data),
        (error: RequestError) => handleError(error, reject),
      );
    });
  }

  function post<K>(url: string, data?: Partial<T> | K) {
    return new Promise<T>((resolve, reject) => {
      instance.post<T>(url, data).then(
        (response) => resolve(response.data),
        (error: RequestError) => handleError(error, reject),
      );
    });
  }

  function put(url: string, data?: Partial<T>) {
    return new Promise<T>((resolve, reject) => {
      instance.put<T>(url, data).then(
        (response) => resolve(response.data),
        (error: RequestError) => handleError(error, reject),
      );
    });
  }

  function deleteRequest(url: string, data?: Partial<T>) {
    return new Promise<DeleteResult>((resolve, reject) => {
      instance.delete<DeleteResult>(url, { data }).then(
        (response) => resolve(response.data),
        (error: RequestError) => handleError(error, reject),
      );
    });
  }

  return {
    requestError,
    get,
    post,
    put,
    deleteRequest,
  };
}
