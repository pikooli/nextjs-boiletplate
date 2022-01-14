/// <reference path="./common.d.ts" />

type User = {
  id: number;
  firstname: string | null;
  lastname: string | null;
  email: string;
  userPrivate?: UserPrivate | null;
  is_logged: boolean;
};

type UserPrivate = {
  id?: number;
  user: User;
  userId: number;
  password?: string;
};
