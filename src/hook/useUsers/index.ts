import { useContext, useEffect, useState } from "react";
import { User } from "@types";
import { usersApi } from "@api";
import { StoreContext } from "src/context";
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
  // const singleDelete = (d: string) => {
  //   setUserUnfullowed(userUnFollowed.filter((contact) => contact.id !== d));
  // };

  // const [shop, setShop] = useState<User[]>([]);
  // const [newUser, setNewUser] = useState<User[]>([]);
  // const singleDelete = (user: string) => {
  //   const newArr = [...userUnFollowed];
  //   const index = userUnFollowed.findIndex((contact) => contact.id === user);
  //   newArr.splice(index, 1).push(newUser);

  //   setUserUnfullowed(newArr);
  //   // if (newArr) {
  //   //   newArr.push(newUser);
  //   // }
  // };

  return { users };
};
export { useUsers };
