---
sidebar_position: 1
---

# Interceptors

## Implement interceptors

```ts title="I've created a interceptor to handle jwt authorization request"
function authorizedInstance(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${jwtToken}`;
    return config;
  });
  return instance;
}
```

```ts title="this interceptor gets implemented on the instance that's being used inside the httpclient hook"
const instance = authorizedInstance(axios.create(config));
```

## Client

```ts
const { get } = useHttpClient({
  config: {
    baseURL: '/api',
  },
  jwtToken: localStorage.getItem('access-token'),
});
```
