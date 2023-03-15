---
sidebar_position: 3
---

# Username and password

Username and password is a mechanism of authentication. For more information [passport-local](https://www.passportjs.org/packages/passport-local)

## How to use

In array of strategies from the client, add strategy with properties, example:

```ts
import { AccessControlModule, localStrategy } from '@invorious/access-control';

AccessControlModule.forRoot({
  strategies: [localStrategy()],
});
```

The client should be implements the interface in the entity and inyectable, example:

```ts
import { IUsersService, IUsernameAndPassword } from '@invorious/access-control';

export class User implements IUsernameAndPassword {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UserService implements IUsersService<User> {
  users: User[] = [];

  findByUsername(username: string) {
    return this.users.find(
      (user) => user.username === username.toLowerCase().trim(),
    );
  }

  register(data: Partial<User>) {
    const newUser: User = {
      id: Date.now(),
      username: data.username,
      password: data.password,
    };
    this.users.push(newUser);
    return newUser;
  }
}
```
