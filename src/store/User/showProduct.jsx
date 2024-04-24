import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

export const fetchUserPodcast = createAsyncThunk('podcast/fetch', async () => {
    try {
        const res = await fetch("https://blog-backend-wt8d.onrender.com/api/v1/admin/allpodcast");
        const data = await res.json();
        // console.log(data);
        return data.podcast;
    } catch (error) {
        throw error;
    }
});


const proSlice = createSlice({
    name: 'showPodcast',
    initialState: {
        data: [],
        status: '',
    },
    reducers: {
        setUserPodcast(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserPodcast.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchUserPodcast.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchUserPodcast.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
});

export const { setUserPodcast, setStatus } = proSlice.actions;
export default proSlice.reducer;
