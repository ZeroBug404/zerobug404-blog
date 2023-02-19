import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case GET_CONTENT:
      return {
        ...state,
        posts: action.payload,
      };
    case UPDATE_CONTENT:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_CONTENT:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };

    default:
      return state;
  }
};

export default postReducer;
