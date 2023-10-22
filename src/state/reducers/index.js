import { createSlice } from "@reduxjs/toolkit";



export const news = createSlice({
    name: 'news',
    initialState: {
        loading: true,
        newsArray: [],
        searchQuery: "",
        cPage: 1,
        tPage: 0,
    },
    reducers: {
        SETNEWS: (state, action) => {
            return { ...state, newsArray: action.payload, loading: false };
        },
        SETQUERY: (state, action) => {
            return { ...state, searchQuery: action.payload, cPage: 1 };
        },
        SETLOADING: (state, action) => {
            return { ...state, loading: action.payload };
        },
        SETPAGE: (state, action) => {
            return { ...state, cPage: action.payload }
        },
        TOTALPAGE: (state, action) => {
            return { ...state, tPage: action.payload }
        }
    }
})
export const { SETNEWS, SETQUERY, SETLOADING, SETPAGE, TOTALPAGE } = news.actions;
export default news.reducer;