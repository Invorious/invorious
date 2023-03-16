---
sidebar_position: 2
---

# Metamask

Metamask is a mechanism of authentication. For more information [ethers](https://docs.ethers.org/v5)

## How to use

```tsx
import { useMetamaskStrategy } from '@invorious/access-control-front';

export function ReactComponent() {
  const { login } = useMetamaskStrategy({ baseURL: '/api/auth/metamask' });

  const handleMetamaskLogin = async () => {
    const message = 'Secret';
    const response = await login(message);
  };

  return 'component react';
}
```
