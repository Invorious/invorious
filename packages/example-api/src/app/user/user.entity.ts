import { IGoogleAccountUser } from "@invorious/access-control";

export class User implements IGoogleAccountUser {
  googleId: string;
  email: string;
  id: number;
}