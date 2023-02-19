import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Blogs from "../components/home/Blogs";
import Categories from "../components/home/Categories";
import Header from "../components/shared/Header";
import { sortByDate } from "../redux/actions/filterActions";

const Home = () => {

  const dispatch = useDispatch();
  const sortByUpload = useSelector((state) => state.filters.filter.sortByUpload);
  console.log(sortByUpload);

  return (
    <div>
      <Header />
      <div className="flex w-8/12 mx-auto gap-5 my-10">
        {
          sortByUpload.includes('last-upload') ? <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch(sortByDate("first-upload"))}
        >
          First upload
        </button> : <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => dispatch(sortByDate("last-upload"))}
        >
          Last upload
        </button>
        }

        
        
      </div>
      <div className="w-9/12 mx-auto my-10 flex justify-around">
        <Blogs />
        <div className="lg:block hidden">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Home;
