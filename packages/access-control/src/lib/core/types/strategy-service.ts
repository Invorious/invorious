export interface IStrategyService<T> {
  register(data: Partial<T>): Promise<T> | T;
}
