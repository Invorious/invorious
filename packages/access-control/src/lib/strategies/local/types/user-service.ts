import { IStrategyService } from '../../../core/types/strategy-service.interface';
import { IUsernameAndPassword } from './username-and-password.interface';

export interface IUsersService<T extends IUsernameAndPassword>
  extends IStrategyService<T> {
  findByUsername(username: string): Promise<T> | T;
}
