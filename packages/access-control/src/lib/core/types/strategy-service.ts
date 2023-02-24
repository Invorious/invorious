export interface StrategyService<T> {
  authenticate(prop: keyof T): boolean | T;
  // update(user: T): T;
  // register(user: T): T;
  // delete(user: T): void;
}
