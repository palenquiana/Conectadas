export type User = {
  id: string;
  name: string;
  email: string;
  pass?: string;
  sessionToken?: string | null;
};

export type UserPayload = Omit<User, "id"> & { pass: string };

export type LoginFormType = {
  email: string;
  pass: string;
};
