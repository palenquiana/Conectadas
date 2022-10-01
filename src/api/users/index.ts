import { User, UserPayload } from "../../types";
import { mapToArray } from "../helpers";
import { apiDB } from "../../utils";

const add = async (user: UserPayload) => {
  apiDB.post("/users.json", JSON.stringify(user));
};

const getAll = async (): Promise<User[]> => {
  const response = await apiDB.get("/users.json");
  return mapToArray(response.data);
};

const get = async (id: string) => {
  const response = await apiDB.get(`users/${id}.json`);

  return mapToArray(response.data);
};

const patch = async (id: string, payload: Partial<User>) => {
  const response = await apiDB.patch(`/users/${id}.json`);

  return mapToArray(response.data);
};

const remove = async (id: string) => {
  const response = await apiDB.delete(`/users/${id}.json`);

  return response.data;
};
export const usersApi = { add, getAll, get, remove, patch };
