import { Authorization } from '@invorious/access-control';
import { applyDecorators } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';

export function Access(...permissions: string[]) {
  return applyDecorators(Authorization<Permission>(...permissions));
}
