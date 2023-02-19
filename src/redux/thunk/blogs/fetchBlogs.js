import { getContent } from "../../actions/postActions";

const fetchBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/posts`);
    const data = await res.json();

    if (data.data.length) {
      dispatch(getContent(data.data));
    }
  };
};

export default fetchBlogs;
