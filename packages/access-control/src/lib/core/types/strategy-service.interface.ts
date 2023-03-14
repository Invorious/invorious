export interface IStrategyService<T> {
  delete(id: number): Promise<T[]> | T;
  update(id: number, data: Partial<T>): Promise<T> | T;
  register(data: Partial<T>): Promise<T> | T;
  findById(id: number): Promise<T> | T;
}
