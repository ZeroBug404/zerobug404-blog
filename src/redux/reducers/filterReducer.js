import { TOGGLE_SORT_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
  filter: {
    tags: [],
    sortByUpload: [],
  },
};

const filterReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case TOGGLE_SORT_CONTENT:
      if (!state.filter.sortByUpload.includes(action.payload)) {
        return {
            ...state,
            filter: {
              ...state.filter,
              sortByUpload: [
                ...state.filter.sortByUpload,
                action.payload,
              ], 
            },
          };
      } else {
        return {
            ...state,
            filter: {
              ...state.filter,
              sortByUpload: state.filter.sortByUpload.filter(uploadTime => uploadTime !== action.payload)
            },
          };
      }
    default:
      return state;
  }
};

export default filterReducer;
