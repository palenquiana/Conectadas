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
  sessionToken: string | null;
  status: string;
};
export type SignUpPayload = Omit<User, "id" | "sessionToken">;

export type LoginFormType = {
  email: string;
  pass: string;
};
export type Location = {
  cities: string[];
  countries: string[];
};
export type Movie = {
  id: string;
  user: Pick<User, "id" | "name" | "lastname">;
  image?: string;
  title: string;
};
