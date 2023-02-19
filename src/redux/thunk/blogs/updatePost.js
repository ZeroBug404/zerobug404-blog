import { updateContent } from "../../actions/postActions";

const updatePost = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/post/${id}`, {
      method: "PUT",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    
    if (data.acknowledged) {
        dispatch(updateContent(id));
      }
    }
}

export default updatePost;