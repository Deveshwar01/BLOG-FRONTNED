import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog, STATUSES } from 'store/Admin/addBlog';
import { toast } from 'react-hot-toast';

const BlogForm = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [descriptionShort, setDescriptionShort] = useState('');
  const [descriptionLong, setDescriptionLong] = useState('');
  const [author, setauthor] = useState('')

  const { status } = useSelector(state => state.addBlog || {});
  const dispatch = useDispatch();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(addBlog({ id, title, img, descriptionShort, descriptionLong, author }));
      toast.success('Blog added successfully'); // Changed 'Product' to 'Blog'
    } catch (error) {
      console.error(`Error during adding Blog: ${error}`);
      window.alert(`Error during adding Blog: ${error.message}`);
    }
  }

  if (status === STATUSES.LOADING) {
    return <h2>LOADING.....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <div className="max-w-md mx-auto p-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="Id" className="block mb-1">Id</label>
          <input
            type="text"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="image" className="block mb-1">Image</label>
          <input
            type="text"
            required
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="descriptionShort" className="block mb-1">Short Description</label>
          <textarea
            type="text"
            required
            value={descriptionShort}
            onChange={(e) => setDescriptionShort(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="descriptionLong" className="block mb-1">Long Description</label>
          <textarea
            type="text"
            required
            value={descriptionLong}
            onChange={(e) => setDescriptionLong(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="author" className="block mb-1">Author</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setauthor(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
