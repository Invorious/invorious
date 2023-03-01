import { DeepPartial } from 'typeorm';

export interface IStrategyService<T> {
  register(data: DeepPartial<T>): Promise<T> | T;
}
