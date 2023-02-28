export interface JwtParser<T, K> {
  parseUser(user: T): K;
}