import { useEffect, useState } from "react";
import { User } from "@types";
import { usersApi } from "@api";
const useUsers = () => {
  const [userUnFollowed, setUserUnfullowed] = useState<User[]>([]);
  // const [userFilter, setUserFilter] = useState([]);

  const catchUser = async () => {
    const response = await usersApi.getAll();

    return response;
  };

  useEffect(() => {
    userUnFollowed &&
      catchUser().then((data) => {
        setUserUnfullowed(data);
      });
  }, []);
  //   const sendUser = async (id: string, user: string, friends: string[]) => {
  //     const resp = await usersApi;
  //   };

  return { userUnFollowed };
};
export { useUsers };
