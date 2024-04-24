import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})


export const addPodcast = createAsyncThunk('admin/addPodcast', async ({ id, title, img, youtubeLink, author }) => {
    try {
        const response = await fetch("https://blog-backend-wt8d.onrender.com/api/v1/admin/createpodcast", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Id: id, title, image: img, youtubeLink ,author})

        })
        if (!response.ok) {
            throw new Error('Failed to add Podcast')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to add Podcast')
    }
});



const userSlice = createSlice({
    name: 'addPodcast',
    initialState: {
        data: null,
        status: STATUSES.IDLE,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPodcast.pending, (state) => {
                state.status = STATUSES.LOADING
            })
            .addCase(addPodcast.fulfilled, (state) => {
                state.status = STATUSES.IDLE
            })
            .addCase(addPodcast.rejected, (state) => {
                state.status = STATUSES.ERROR
            })

    }
})

export default userSlice.reducer;