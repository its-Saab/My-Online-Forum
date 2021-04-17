import { selector } from "recoil";
import PostsApi from "../api/PostsApi";

export const postsStates = selector({
  key: "postsStates",
  async get({ get }) {
    try {
      return PostsApi.getAllPosts().then(({ data }) => data);
    } catch (e) {
      console.error("ERROR GET /posts", e);
    }
  },
});
