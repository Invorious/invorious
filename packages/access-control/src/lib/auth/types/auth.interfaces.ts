export interface IRegisterUserDto<T = any> {
  username: string;
  password: string;
  encryptedPassword?: boolean;
  userAttributes?: T;
}
