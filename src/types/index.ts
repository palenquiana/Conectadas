export type SigUpType = {
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
  sessionToken: string | null;
  status: string;
};
export type UserPayload = Omit<SigUpType, "id" | "sessionToken">;

export type LoginFormType = {
  email: string;
  pass: string;
};
