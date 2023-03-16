---
sidebar_position: 3
---

# Username and password

Username and password is a mechanism of authentication. For more information [passport-local](https://www.passportjs.org/packages/passport-local)

## How to use

```tsx
import { useLocalStrategy } from '@invorious/access-control-front';

export function ReactComponent() {
  const { login } = useLocalStrategy({ baseURL: '/api/auth/local' });

  const handleLogin = async () => {
    const username = 'invorious';
    const password = '123';
    const response = await login(username, password);
  };

  return 'component react';
}
```
