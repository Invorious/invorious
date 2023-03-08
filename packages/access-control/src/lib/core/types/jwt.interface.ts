export interface IJwtParser<T, K> {
  parseUser(user: T): K;
}

export interface IJwtPayload {
  id: number;
}

export interface IJwtToken {
  accessToken: string;
}
