import AddPost from "../../../components/dashboard/AddPost";

const addPostData = (post) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/post`, {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(AddPost({
        _id: data.insertedId,
        ...post, 
      }));
    }
  };
};

export default addPostData;
