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
  date: {
    day: new Date().getDay().toLocaleString(),
    month: new Date().getMonth().toLocaleString(),
    year: new Date().getFullYear().toLocaleString(),
  },
};
