import { IGoogleAccountUser } from "@invorious/access-control/google-account/types";

export class User implements IGoogleAccountUser {
  googleId: string;
  email: string;
  id: number;
}