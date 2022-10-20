import { getLocation } from "../api";

export const catchLocation = async () => {
  const response = await getLocation();
  return response;
};
