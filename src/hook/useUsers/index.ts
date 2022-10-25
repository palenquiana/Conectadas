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
  // const singleDelete = (d: string) => {
  //   setUserUnfullowed(userUnFollowed.filter((contact) => contact.id !== d));
  // };

  // const [shop, setShop] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User[]>([]);
  const singleDelete = (user: string) => {
    const newArr = [...userUnFollowed];
    const index = userUnFollowed.findIndex((contact) => contact.id === user);
    newArr.splice(index, 1).push(newUser);

    setUserUnfullowed(newArr);
    // if (newArr) {
    //   newArr.push(newUser);
    // }
  };

  return { userUnFollowed, singleDelete, newUser };
};
export { useUsers };
