import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const fetchBlog = createAsyncThunk('fetch/admin/blogAdmin', async () => {
    try {
        const res = await fetch("https://blog-backend-wt8d.onrender.com/api/v1/admin/allblog");
        const data = await res.json();
        return data.blog;
    } catch (error) {
        throw error;
    }
});

export const deleteBlog = createAsyncThunk('blog/delete', async (Id) => {
    try {
        await fetch(`https://blog-backend-wt8d.onrender.com/api/v1/admin/delete/${Id}`, {
            method: 'DELETE'
        });
        return Id;
    } catch (error) {
        throw error;
    }
});

const proSlice = createSlice({
    name: 'showBlog',
    initialState: {
        data: [],
        status: '',
    },
    reducers: {
        setBlog(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(deleteBlog.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.data = state.data.filter(product => product.id !== action.payload);
                state.status = STATUSES.IDLE;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    }
});

export const { setBlog, setStatus } = proSlice.actions;
export default proSlice.reducer;
