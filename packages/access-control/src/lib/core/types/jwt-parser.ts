export interface JwtParser<T, K extends object> {
  parseUser(user: T): K;
}
