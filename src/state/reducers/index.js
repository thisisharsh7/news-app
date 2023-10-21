import { createSlice } from "@reduxjs/toolkit";



export const news = createSlice({
    name: 'news',
    initialState: {
        loading: true,
        newsArray: [],
        searchQuery: ''
    },
    reducers: {
        SETNEWS: (state, action) => {
            return { ...state, newsArray: action.payload, loading: false };
        },
        SETLOADING: (state, action) => {
            return { ...state, loading: action.payload };
        }
    }
})
export const { SETNEWS, SETLOADING } = news.actions;
export default news.reducer;