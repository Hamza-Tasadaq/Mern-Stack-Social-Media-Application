import {
  FETECH_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../actions/actionTypes";

const posts = [];

const reducer = (state = posts, action) => {
  switch (action.type) {
    case FETECH_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE_POST:
      return state.filter((post) => post._id !== action.payload._id);
    case LIKE_POST:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    default:
      return state;
  }
};

export default reducer;
