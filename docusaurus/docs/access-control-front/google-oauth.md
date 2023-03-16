---
sidebar_position: 1
---

# Google OAuth

Google OAuth is a mechanism of authentication. For more information [passport-google-oauth20](https://www.passportjs.org/packages/passport-google-oauth20)

## How to use

Add in `routeToRedirect` the route of the frontend and in `callbackURL` add url of the backend. validate url's in [google](https://console.cloud.google.com).

```ts title="Backend"
import { AccessControlModule, googleStrategy } from '@invorious/access-control';

AccessControlModule.forRoot({
  strategies: [
    googleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3333/api/google/register',
      routeGoogle: 'google/register',
      routeToRedirect: 'http://localhost:4200/login',
    }),
  ],
});
```

```tsx title="Frontend"
export function ReactComponent() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3333/api/google';
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const receivedToken = searchParams.get('token');
  }, []);

  return 'component react';
}
```
