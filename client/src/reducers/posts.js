import { FETECH_ALL_POSTS, CREATE_POST } from "../actions/actionTypes";

const posts = [];

const reducer = (state = posts, action) => {
  switch (action.type) {
    case FETECH_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
