import React, { useEffect } from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlog, STATUSES, deleteBlog } from 'store/Admin/showBlog';

const DisplayBlog = () => {
    const blogs = useSelector((state) => state.showBlog.data);
    const status = useSelector(state => state.showBlog.status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog());
    }, [dispatch]);

    const handleDelete = (blogId) => {
        dispatch(deleteBlog(blogId));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading</h2>;
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong</h2>;
    }
    if (!blogs || blogs.length === 0) {
        return <h2>No blogs found</h2>;
    }
    return (
        <div className="left-content">
            <div className="upcoming-events">
                <h1>All Blogs</h1>
                {blogs.map(blog => (
                    <div className="event-container" key={blog.id}>
                        <div className="card event-card">
                            <div className="event-header">
                                <img src={blog.image} alt="" />
                                <i className="bx bx-heart like-btn"></i>
                            </div>
                            <div className="event-content">
                                <h2>{blog.title}</h2>
                                <p>{blog.descriptionShort}</p>
                            </div>
                            <div className="event-footer">
                                <p style={{ backgroundColor: '#e48e2c' }}>Update</p>
                                <div className="btn-group">
                                    <button onClick={() => handleDelete(blog.Id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayBlog;
