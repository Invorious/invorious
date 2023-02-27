export interface JwtParser<K> {
  parseUser<T>(user: T): K;
}
