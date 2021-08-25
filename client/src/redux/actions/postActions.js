import {
  GET_POSTS,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_LIKE,
  ADD_VISITOR,
  CREATE_POST,
} from "../constants/actionTypes";

import * as api from "../../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();

    return dispatch({ type: GET_POSTS, payload: data });
  } catch (err) {
    console.log("Error from get posts action", err);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPost(id);

    return dispatch({ type: GET_POST, payload: data });
  } catch (err) {
    console.log("Error from get post action", err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log(post);
    const { data } = await api.createPost(post);

    return dispatch({ type: CREATE_POST, payload: data });
  } catch (err) {
    console.log("Error from create posts action", err);
  }
};

export const updatePost = (id, updateData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updateData);

    return dispatch({ type: UPDATE_POST, payload: data });
  } catch (err) {
    console.log("Error from update posts action", err);
  }
};

export const addLike = (id) => async (dispatch) => {
  try {
    const { data } = await api.addLike(id);

    dispatch({ type: ADD_LIKE, payload: data });
  } catch (err) {
    console.log("Error from add like to posts action", err);
  }
};

export const addVisitor = (id) => async (dispatch) => {
  try {
    const { data } = await api.addVisitor(id);

    dispatch({ type: ADD_VISITOR, payload: data });
  } catch (err) {
    console.log("Error from add visitor to posts action", err);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: data });
  } catch (err) {
    console.log("Error from delete posts action", err);
  }
};
