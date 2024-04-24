import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const fetchUserBlog = createAsyncThunk('blog/user/fetch', async () => {
    try {
        const res = await fetch("https://blog-backend-wt8d.onrender.com/api/v1/users/allblogs");
        const data = await res.json();
        console.log(data);
        return data.blog;
    } catch (error) {
        throw error;
    }
});


const proSlice = createSlice({
    name:'userBlog',
    initialState: {
        data: [],
        status: '',
    },
    reducers: {
        setUserBlog(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserBlog.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchUserBlog.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchUserBlog.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setUserBlog, setStatus } = proSlice.actions;
export default proSlice.reducer;
