export interface IStrategyService<T> {
  update(id: number, data: Partial<T>): Promise<T> | T;
  register(data: Partial<T>): Promise<T> | T;
  findById(id: number): Promise<T> | T;
}
