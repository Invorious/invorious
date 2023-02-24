export interface IRegisterUserDto {
  username: string;
  password: string;
  encryptedPassword?: boolean;
  // userAttributes?: T;
}
