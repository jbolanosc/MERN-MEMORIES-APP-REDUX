import {
  GET_POSTS,
  GET_POST,
  ADD_LIKE,
  ADD_VISITOR,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export default function PostReducer(posts = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case GET_POST:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    case UPDATE_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return posts.filter((post) => post._id !== action.payload);
    case ADD_LIKE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case ADD_VISITOR:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return false;
  }
}
