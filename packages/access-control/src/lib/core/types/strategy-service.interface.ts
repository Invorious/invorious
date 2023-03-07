export interface IStrategyService<T> {
  register(data: Partial<T>): Promise<T> | T;
  findById(id: number): Promise<T> | T;
}
