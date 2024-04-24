import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from "./Admin/addBlog";
import PodcastReducer from './Admin/addPodcast';
import ShowBlogReducer from './Admin/showBlog';
import showProductReducer from './User/showProduct';
import UserBlogReducer from './User/showUserBlog';
const store = configureStore({
    reducer: {
        // admin
        addBlog: BlogReducer,
        addPodcast: PodcastReducer,
        showBlog: ShowBlogReducer,
        showPodcast: showProductReducer,
        userBlog:UserBlogReducer
    },
});

export default store;
