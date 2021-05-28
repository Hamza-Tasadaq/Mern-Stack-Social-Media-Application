import * as api from "../api";
import { FETECH_ALL_POSTS, CREATE_POST } from "./actionTypes";

const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({ type: FETECH_ALL_POSTS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

const createPost = (newPost) => {
  return async (dispatch) => {
    try {
      const { data } = await api.createPost(newPost);
      dispatch({ type: CREATE_POST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export { getPosts, createPost };
