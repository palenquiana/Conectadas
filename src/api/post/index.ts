import { mapToArray } from "@helpers";
import { Post, PostPayload } from "@types";
import { apiDB } from "@utils";

const add = async (post: PostPayload) => {
  apiDB.post("/posts.json", JSON.stringify(post));
};

const get = async (): Promise<Post[]> => {
  const response = await apiDB.get("/posts.json");
  return mapToArray(response.data);
};

const patch = async (postId: string, payload: Partial<Post>) => {
  const response = await apiDB.patch(`/posts/${postId}.json`, payload);

  return mapToArray(response.data);
};

export const postRequest = { add, get, patch };
