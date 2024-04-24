import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})


export const addBlog = createAsyncThunk('admin/addBlog', async ({ id, title, img, descriptionShort, descriptionLong, author }) => {
    try {
        const response = await fetch("https://blog-backend-wt8d.onrender.com/api/v1/admin/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Id: id, title,
                image: img, descriptionShort, descriptionLong, author
            })

        })
        if (!response.ok) {
            throw new Error('Failed to add Blog')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to add Blog')
    }
});



const userSlice = createSlice({
    name: 'addBlog',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addBlog.pending, (state) => {
                state.status = STATUSES.LOADING
            })
            .addCase(addBlog.fulfilled, (state) => {
                state.status = STATUSES.IDLE
            })
            .addCase(addBlog.rejected, (state) => {
                state.status = STATUSES.ERROR
            })

    }
})

export default userSlice.reducer;