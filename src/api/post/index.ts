import { PostPayload } from "@types";
import { apiDB } from "@utils";

const add = async (post: PostPayload) => {
  apiDB.post("/post.json", JSON.stringify(post));
};
export const postRequest = { add };
