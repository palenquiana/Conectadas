import { User, UserPayload } from "../../types";
import { mapToArray } from "../helpers";

const add = async (user: UserPayload) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    Headers: {
      contentType: "application/json",
    },
  };

  const response = await fetch(
    "https://conectadas-5487f-default-rtdb.firebaseio.com/users.json",
    options
  );
  const data = await response.json();

  return mapToArray(data);
};

const getAll = async (): Promise<User[]> => {
  const response = await fetch(
    "https://conectadas-5487f-default-rtdb.firebaseio.com/users.json"
  );
  const data = await response.json();

  return mapToArray(data);
};

const get = async (id: string) => {
  const response = await fetch(
    `https://conectadas-5487f-default-rtdb.firebaseio.com/users/${id}.json`
  );
  const data = await response.json();

  return data;
};

const patch = async (id: string, payload: Partial<User>) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(payload),
    Headers: {
      contentType: "application/json",
    },
  };

  const response = await fetch(
    `https://conectadas-5487f-default-rtdb.firebaseio.com/users/${id}.json`,
    options
  );
  const data = await response.json();

  return mapToArray(data);
};

const remove = async (id: string) => {
  const options = {
    method: "DELETE",
  };

  const response = await fetch(
    `https://conectadas-5487f-default-rtdb.firebaseio.com/users/${id}.json`,
    options
  );
  const data = await response.json();

  return data;
};
export const usersApi = { add, getAll, get, remove, patch };
