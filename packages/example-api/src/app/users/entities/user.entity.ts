import { IUserAndPass } from '@invorious/access-control';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User implements IUserAndPass {
  constructor(id: number, username: string, password: string, address: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.address = address;
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

  @Column({
    unique: true,
  })
  address: string;
}
