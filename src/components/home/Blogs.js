import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogs from "../../redux/thunk/blogs/fetchBlogs";
import Blog from "../blog/Blog";

const Blogs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch]);

  const blogs = useSelector(state => state.blogs.posts)
  const filters = useSelector(state => state.filters.filter)
  const {sortByUpload} = filters
  // console.log(sortByUpload)

  let content;

  if(blogs.length){
   content = blogs?.map(blog => <Blog blog={blog}/>)
  }

  const order = (a, b) => {
    return a < b ? -1 : (a > b ? 1 : 0);
  }
  if(blogs.length && sortByUpload.includes('last-upload')){
   content = blogs.map(blog => <Blog blog={blog}/>).reverse(order)
  //  console.log(content)
  } 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
      {content}
    </div>
  );
};

export default Blogs;
