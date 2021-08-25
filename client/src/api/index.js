import axios from "axios";

const url = "/api/posts";

export const getPosts = () => axios.get(url);
export const getPost = (id) => axios.get(`${url}/${id}`);
export const createPost = (post) => axios.post(url, { data: post });
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const addLike = (id) => axios.patch(`${url}/${id}/like`);
export const addVisitor = (id) => axios.patch(`${url}/${id}/visitor`);
