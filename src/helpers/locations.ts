import { getPromesa } from "@api";

export const getLocation = async () => {
  const response = await getPromesa();
  return response;
};
