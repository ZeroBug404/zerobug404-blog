import { deleteContent } from "../../actions/postActions";

const deletePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();


    if (data.acknowledged) {
        dispatch(deleteContent(id));
      }
    }
}

export default deletePost;