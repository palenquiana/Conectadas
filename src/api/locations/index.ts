import { mapToArray } from "@helpers";
import { Location } from "@types";
import { apiDB } from "@utils";

const getPromesa = async (): Promise<Location> => {
  const response = await apiDB.get("/locations.json");

  return mapToArray(response.data)[0];
};
export { getPromesa };
