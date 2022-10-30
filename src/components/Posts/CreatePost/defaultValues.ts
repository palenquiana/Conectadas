import { PostPayload } from "@types";

export const defaultValues: PostPayload = {
  user: {
    id: "",
    lastname: "",
    name: "",
  },
  image: "",
  title: "",
  detail: "",
  date: new Date(),
};
