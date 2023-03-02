import { Authorization } from '@invorious/authorization';
import { applyDecorators } from '@nestjs/common';
import { Permission } from '../permission/permission.entity';

export function Access(...permissions: string[]) {
  return applyDecorators(Authorization<Permission>(...permissions));
}
