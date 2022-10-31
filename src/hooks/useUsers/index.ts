import { useContext, useEffect, useState } from "react";
import { usersApi } from "@api";
import { StoreContext } from "@contexts";

const useUsers = () => {
  const { users, usersUpdate } = useContext(StoreContext);

  const catchUser = async () => {
    const response = await usersApi.getAll();

    return response;
  };

  useEffect(() => {
    users &&
      catchUser().then((data) => {
        usersUpdate(data);
      });
  }, []);

  return { users };
};
export { useUsers };
