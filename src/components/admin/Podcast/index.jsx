import React, { useState } from 'react';
import { addPodcast, STATUSES } from 'store/Admin/addPodcast';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
const PodcastForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [author, setAuthor] = useState('');

    const { status } = useSelector(state => state.addPodcast || {});
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(addPodcast({ id, title, img, youtubeLink, author }));
            toast.success('Podcast added successfully');
        } catch (error) {
            console.error(`Error during adding Podcast: ${error}`);
            window.alert(`Error during adding Podcast: ${error.message}`);
        }
    }

    if (status === STATUSES.LOADING) {
        return <h2>LOADING.....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong...</h2>;
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="id" className="block mb-1">Id</label>
                    <input
                        type="text"
                        required
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="Title" className="block mb-1">Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="image" className="block mb-1">Image URL</label>
                    <input
                        type="text"
                        required
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="youtubeLink" className="block mb-1">YouTube Link</label>
                    <input
                        type="text"
                        required
                        value={youtubeLink}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <label htmlFor="youtubeLink" className="block mb-1">Author</label>
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PodcastForm;
