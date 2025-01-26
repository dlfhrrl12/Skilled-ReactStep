// import { combineReducers, createStore } from "redux";
// import todos from "../modules/todos";
// import { counter } from "../modules/counter";

import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../slices/counterSlice";

// 1) rootReducer를 만듬
// const rootReducer = combineReducers({
//     // counter,
//     todos: todos,
// });

// 2) store를 생성
// const store = createStore(rootReducer);

// const store = configureStore({
//     reducer: {
//         counter: counterSlice,
//     }
// })

const store = configureStore({
    reducer: {
        todos: todosSlice,
    }
})

// 3) 만든 store 내보냄
export default store;