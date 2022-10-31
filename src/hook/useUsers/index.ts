import { useContext, useEffect, useState } from "react";

import { usersApi } from "@api";
import { StoreContext } from "../../context";
const useUsers = () => {
  const { users, userUpdate } = useContext(StoreContext);

  const catchUser = async () => {
    const response = await usersApi.getAll();

    return response;
  };

  useEffect(() => {
    users &&
      catchUser().then((data) => {
        userUpdate(data);
      });
  }, []);

  return { users };
};
export { useUsers };
