import { InternalServerErrorException, SetMetadata } from '@nestjs/common';

export const metaAuthorization = 'authorization';

export const AuthorizationMetadata = (...permissions: string[]) => {
  const validateRegex = /^\w{1,}:\w{1,}:\w{1,}$/;
  permissions.forEach((permission) => {
    if (!validateRegex.test(permission)) {
      throw new InternalServerErrorException(
        'Permission should be like this example "Feature:Action:Possession"',
      );
    }
  });
  return SetMetadata(metaAuthorization, permissions);
};
