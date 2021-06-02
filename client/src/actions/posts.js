import * as api from "../api";
import {
  FETECH_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "./actionTypes";

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

const updatePost = (id, post) => {
  return async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({ type: UPDATE_POST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.deletePost(id);
      dispatch({ type: DELETE_POST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

const likePost = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
      dispatch({ type: LIKE_POST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export { getPosts, createPost, updatePost, deletePost, likePost };
