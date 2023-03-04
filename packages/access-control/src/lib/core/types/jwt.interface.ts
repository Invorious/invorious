export interface JwtParser<T, K> {
  parseUser(user: T): K;
}

export interface JwtToken {
  accessToken: string;
}
