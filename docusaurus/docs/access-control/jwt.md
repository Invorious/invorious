---
sidebar_position: 1
---

# JWT

It is the focus on which all strategies work. For more information [passport-jwt](https://www.passportjs.org/packages/passport-jwt)

## How to use

```ts
import { AccessControlModule } from '@invorious/access-control';

AccessControlModule.forRoot({
  AccessControlClientModule,
  AccessControlClientService,
  UserModule,
  UserService,
  jwtOptions: {
    secret: 'aaaa',
  },
});
```

The client should be implements the interface in the inyectable del core client, example:

```ts
import {
  IAccessControlClientService,
  IJwtPayload,
} from '@invorious/access-control';
import { Injectable } from '@nestjs/common';

class User {
  id: number;
}

@Injectable()
export class AccessControlClientService
  implements IAccessControlClientService<User, IJwtPayload>
{
  parseUser(user: User) {
    return { id: user.id };
  }
}
```
