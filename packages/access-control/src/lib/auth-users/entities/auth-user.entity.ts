import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { UserAttributes } from '../enums/user-attributes.enum';
// import { isEmail } from '../../core/validators/is-email';

@Entity()
export class AuthUser {
  constructor(
    username: string,
    password: string,
    // userAttributes: UserAttributes,
  ) {
    this.username = username;
    this.password = password;
    // this.userAttributes = userAttributes;
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
  })
  username: string;

  @Column({
    nullable: true,
  })
  password: string;

  // @Column({
  //   nullable: true,
  //   type: 'jsonb',
  // })
  // userAttributes: UserAttributes;

  setEncryptedPassword(password: string) {
    this.password = password;
  }

  // getAttributes(attributeKey: any) {
  //   return this.userAttributes[attributeKey];
  // }

  // getEmail(): string {
  //   return isEmail(this.username)
  //     ? this.username
  //     : this.getAttributes(UserAttributes.Email);
  // }
}
