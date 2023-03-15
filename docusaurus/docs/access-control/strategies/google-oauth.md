---
sidebar_position: 1
---

# Google OAuth

Google OAuth is a mechanism of authentication. For more information [passport-google-oauth20](https://www.passportjs.org/packages/passport-google-oauth20)

## How to use

In array of strategies from the client, add strategy with properties required, example:

```ts
import { AccessControlModule, googleStrategy } from '@invorious/access-control';

AccessControlModule.forRoot({
  strategies: [
    googleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3333/api/google/register',
      routeGoogle: 'google/register',
      routeToRedirect: '/api',
    }),
  ],
});
```

The client should be implements the interface in the entity and inyectable, example:

```ts
import {
  IGoogleAccountService,
  IGoogleAccountUser,
} from '@invorious/access-control';

export class User implements IGoogleAccountUser {
  id: number;
  googleId: string;
  email: string;
}

@Injectable()
export class UserService implements IGoogleAccountService<User> {
  users: User[] = [];

  findByGoogleId(googleId: string): User {
    return this.users.find((user) => user.googleId === googleId);
  }
  registerByGoogle(user: Profile): void {
    this.users.push({
      email: user.emails[0].value,
      googleId: user.id,
      id: Date.now(),
    });
  }
}
```
