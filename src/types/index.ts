export type User = {
  avatar?: string;
  birthdate: Date;
  city: string;
  country: string;
  email: string;
  friends: string[];
  id: string;
  lastname: string;
  name: string;
  password: string;
  sessionToken: string;
  status: string;
};
export type UserPayload = Omit<User, "id" | "sessionToken">;
export type SigUpType = Omit<
  User,
  "avatar" | "password" | "sessionToken" | "status"
>;

export type LoginFormType = {
  email: string;
  pass: string;
};
