import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContent } from '../../redux/actions/postActions';
import addPostData from '../../redux/thunk/blogs/addPostData';

const AddPost = () => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        const post = {
          title: data.title,
          description: data.description,
          brand: data.brand,
          status: data.status === "true" ? true : false,
          price: data.price,
          keyFeature: [
            data.keyFeature1,
            data.keyFeature2,
            data.keyFeature3,
            data.keyFeature4,
          ],
          spec: [],
        };
    
        console.log(post);
        dispatch(addPostData(post))
      };

    return (
        <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='title'>
            Post Title
          </label>
          <input className='border-2 outline-none' type='text' id='model' {...register("title")} />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Image
          </label>
          <input className='border-2 outline-none ' type='text' name='image' id='image' {...register("image")} />
        </div>

        {/* <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Brand
          </label>
          <select name='brand' id='brand' {...register("brand")}>
            <option value='amd'>AMD</option>
            <option value='intel'>Intel</option>
          </select>
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='price'>
            Image
          </label>
          <input type='text' name='price' id='price' {...register("price")} />
        </div> */}
        
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-3' htmlFor='brand'>
            Description
          </label>
          <textarea rows="4" cols="70" maxlength="200" className='border-2 outline-none ' type='text' id='description' {...register("description")}>

          </textarea>
        </div>

        <div className='flex flex-col w-full max-w-xs'>
          <h1 className='mb-3'>Availability</h1>
          <div className='flex gap-3'>
            <div>
              <input
                type='radio'
                id='available'
                value={true}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='available'>
                Available
              </label>
            </div>
            <div>
              <input
                type='radio'
                id='stockOut'
                name='status'
                value={false}
                {...register("status")}
              />
              <label className='ml-2 text-lg' htmlFor='stockOut'>
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full max-w-xs'></div>


        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    );
};

export default AddPost;