export interface IJwtParser<T, K> {
  parseUser(user: T): K;
}

export interface IJwtToken {
  accessToken: string;
}
