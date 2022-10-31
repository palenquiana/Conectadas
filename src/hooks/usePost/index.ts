import { postRequest } from "@api";
import { Post, PostPayload } from "@types";
import { useContext, useEffect } from "react";
import { StoreContext } from "@contexts";

const usePost = () => {
  const { posts, postsUpdate } = useContext(StoreContext);

  useEffect(() => {
    !posts && getPosts();
  }, []);
  const sendPost = async (post: PostPayload) => {
    //TODO
    //try catch
    const addPost = await postRequest.add(post);
    getPosts();

    return addPost;
  };
  const getPosts = async () => {
    const catchPosts = await postRequest.get();
    postsUpdate(catchPosts);
  };
  const upgradePost = async (postId: string, payload: Partial<Post>) => {
    const upgrade = await postRequest.patch(postId, payload);
    await getPosts();
  };

  return { posts, sendPost, upgradePost };
};
export { usePost };
