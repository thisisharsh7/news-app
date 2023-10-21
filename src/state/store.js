import { configureStore } from "@reduxjs/toolkit"
import newsReducer from './reducers/index';
//from this file we are managing the store
export default configureStore({
    reducer: {
        newsReducer,
    }
}, window._REDUX_DEVTOOLS_EXTENSIONS && window._REDUX_DEVTOOLS_EXTENSIONS())