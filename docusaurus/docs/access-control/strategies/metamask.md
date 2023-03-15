---
sidebar_position: 2
---

# Metamask

Metamask is a mechanism of authentication. For more information [ethers](https://docs.ethers.org/v5)

## How to use

In array of strategies from the client, add strategy with properties, example:

```ts
import {
  AccessControlModule,
  metamaskStrategy,
} from '@invorious/access-control';

AccessControlModule.forRoot({
  strategies: [metamaskStrategy()],
});
```

The client should be implements the interface in the entity and inyectable, example:

```ts
import {
  IMetamaskService,
  IMetamaskUserEntity,
} from '@invorious/access-control';

export class User implements IMetamaskUserEntity {
  id: number;
  address: string;
}

@Injectable()
export class UserService implements IMetamaskService<User> {
  users: User[] = [];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }
  register(data: Partial<User>) {
    const newUser: User = {
      id: Date.now(),
      address: data.address,
    };
    this.users.push(newUser);
    return newUser;
  }
}
```
