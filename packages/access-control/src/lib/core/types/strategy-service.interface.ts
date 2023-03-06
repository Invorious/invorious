export interface IStrategyService<T> {
  register(data: Partial<T>): T;
  findById(id: number): T;
}
