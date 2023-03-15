---
sidebar_position: 2
---

# Authorization

Your function is to secure controllers by jwt and permissions.

## How to use

```ts title="Configuration app module"
import {
  AccessControlModule,
  tokenUserService,
} from '@invorious/access-control';

const providerUserService = {
  provide: tokenUserService,
  useExisting: UserService,
};

@Global()
@Module({
  imports: [
    UserModule,
    AccessControlModule.forRoot({
      AccessControlClientModule,
      AccessControlClientService,
      UserModule,
      UserService,
      jwtOptions: {
        secret: 'aaaa',
      },
    }),
  ],
  providers: [providerUserService, JwtService],
  exports: [providerUserService, JwtService],
})
export class AppModule {}
```

```ts title="The client should be to create a decorator friendly for all the controllers"
import { Authorization } from '@invorious/access-control';
import { applyDecorators } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';

export function AccessControl(...permissions: string[]) {
  return applyDecorators(Authorization<Permission>(...permissions));
}
```

```ts title="Implement in controllers"
export class UserController {
  @Get()
  @AccessControl('Feature:Action:Possession')
  getData() {
    return 'api';
  }
}
```

```ts title="Configuration entities"
export class User implements IAuthorizationUser {
  id: number;
  permissions: Permission[];
}

export class Permission implements IAuthorizationPermission {
  feature: string;
  action: string;
  possession: string;
}
```

```ts title="Configuration user service"
export class UserService implements IAuthorizationService<Permission> {
  users: User[] = [];

  findPermissionsById(id: number) {
    const user = this.users.find((user) => user.id == id);
    return user.permissions;
  }
}
```
