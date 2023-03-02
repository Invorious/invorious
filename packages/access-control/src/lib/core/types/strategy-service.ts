import { DeepPartial } from 'typeorm';

export interface IStrategyService<T> {
  register(data: DeepPartial<T>): Promise<T> | T;
  update(data: DeepPartial<T>): Promise<T> | T;
}
