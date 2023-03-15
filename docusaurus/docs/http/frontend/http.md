---
sidebar_position: 1
---

# Http

## Function for http requests

Created a `useHttpClient<T>()` hook to perform get, post, put and delete onto the specified URL, internally these requests are made using axios and Promises.

```ts
return new Promise<T>((resolve, reject) => {
  instance.method<T>(url, data).then(
    (response) => resolve(response.data),
    (error: RequestError) => handleError(error, reject),
  );
});
```

I preffered axios over fetch due to implementing interceptors, on axios you can use: `axios.inteceptros.request.use()`

## Client implementation

Client can simply call this hook form the library, passing an interface of the expected response and if he wants base axios configuration and an onError function, in case client wants to update the UI/perform an action when an error ocurs.

```ts title="response interface"
interface ExpectedResponse {
  id: number;
  message: string;
  weedEnjoyer: boolean;
}

const { get, post, put, deleteRequest } = useHttpClient<ExpectedResponse>({
  baseURL: '/api',
});
```

```tsx title="Now all we have to do is call our imported functions, in this example case I'll use them on a onClick event."
const performPut = async () => {
  const response = await put('/test', {
    message: 'hola amigo',
    weedEnjoyer: true,
  });
};
async function performPost() {
  const response = await post('/test', {
    id: 420,
    weedEnjoyer: true,
  });
}

<button onClick="{performPost}">POST</button>;
```
