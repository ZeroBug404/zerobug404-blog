import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { updateContent } from "../../redux/actions/postActions";
import deletePost from "../../redux/thunk/blogs/deletePost";
import updatePost from "../../redux/thunk/blogs/updatePost";

const BlogtList = () => {
  const [isActive, setActive] = useState(true);

  const { register, handleSubmit } = useForm();

  const blogs = useSelector((state) => state.blogs.posts);


  // const postIds = blogs.map((blog) => blog._id);
  console.log(blogs);

  const dispatch = useDispatch();

  const toggleModal = (post) => {
    setActive(!isActive);

    // console.log(post);

    // dispatch(updatePost(post))
  };

  const submit = (data) => {
    const post = {
      title: data.title,
      description: data.description,
      status: data.status === "true" ? true : false,
    };

    console.log(post);

    // dispatch(updateContent(post))
  }

  return (
    <div class="flex flex-col justify-center items-center h-full w-full ">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Products</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th class="p-2">
                  <div class="font-semibold text-left">Post Title</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Date</div>
                </th>
                {/* <th class='p-2'>
                  <div class='font-semibold text-left'>Is Active</div>
                </th> */}

                <th class="p-2">
                  <div class="font-semibold text-center">Actions</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {/* {blogs.map((post) => ( */}
               {blogs.map(({ title, brand, price, isActive, _id }) => (
                <>
                <tr>
                  <td class="p-2">
                    <input type="checkbox" class="w-5 h-5" value="id-1" />
                  </td>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{title}</div>
                  </td>

                  {/* <td class='p-2'>
                    <div class='text-left'>
                      {isActive ? (
                        <p className='text-green-500 font-medium'>Available</p>
                      ) : (
                        <p className='text-red-500 font-medium'>Stock out</p>
                      )}
                    </div>
                  </td> */}
                  <td class="p-2">
                    <div class="text-left font-medium text-indigo-500">
                      {price}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="flex justify-center gap-3">
                      <button onClick={toggleModal}>
                        <BiEdit className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1" />
                      </button>
                      <button onClick={() => dispatch(deletePost(_id))}>
                        <svg
                          class="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </>
              ))}
            </tbody>
          </table>
        </div>

        <div
                className={`${
                  isActive ? "hidden" : ""
                } fixed z-10 overflow-y-auto top-0 w-full left-0`}
                id=""
              >
                <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div class="fixed inset-0 transition-opacity">
                    <div class="absolute inset-0 bg-gray-900 opacity-75" />
                  </div>
                  <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
                    &#8203;
                  </span>
                  <div
                    class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                  >
      
                    <form
                      className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
                      onSubmit={handleSubmit(submit)}
                    >
                      <div className="flex flex-col w-full">
                        <label className="mb-2" htmlFor="title">
                          Post Title
                        </label>
                        <input
                          className="border-2 outline-none"
                          type="text"
                          id="model"
                          {...register("title")}
                        />
                      </div>
                      <div className="flex flex-col w-full ">
                        <label className="mb-2" htmlFor="image">
                          Image
                        </label>
                        <input
                          className="border-2 outline-none "
                          type="text"
                          name="image"
                          id="image"
                          {...register("image")}
                        />
                      </div>
      
                      <div className="flex flex-col w-full ">
                        <label className="mb-3" htmlFor="brand">
                          Description
                        </label>
                        <textarea
                          rows="4"
                          cols="70"
                          maxlength="200"
                          className="border-2 outline-none "
                          type="text"
                          id="description"
                          {...register("description")}
                        ></textarea>
                      </div>
      
                      <div className="flex flex-col w-full max-w-xs">
                        <h1 className="mb-3">Availability</h1>
                        <div className="flex gap-3">
                          <div>
                            <input
                              type="radio"
                              id="available"
                              value={true}
                              {...register("status")}
                            />
                            <label className="ml-2 text-lg" htmlFor="available">
                              Available
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="stockOut"
                              name="status"
                              value={false}
                              {...register("status")}
                            />
                            <label className="ml-2 text-lg" htmlFor="stockOut">
                              Stock out
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col w-full max-w-xs"></div>
      
                      <div className="flex justify-end items-center w-full">
                        <button
                          type="button"
                          class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                          // onClick={toggleModal}
                        >
                          Cancel
                        </button>
                        <button
                          type='submit'
                          class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                          
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
        </div>
        
      </div>
    </div>
  );
};

export default BlogtList;
