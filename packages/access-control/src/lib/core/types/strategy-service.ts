export interface IStrategyService<T> {
  findById(id: number): Promise<T> | T;
  register(data: Partial<T>): Promise<T> | T;
  update(data: Partial<T>): Promise<T> | T;
}
