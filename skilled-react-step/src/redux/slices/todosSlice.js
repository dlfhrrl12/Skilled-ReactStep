import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        title: "react를 배워봅시다."
    },
    {
        id: 2,
        title: "redux를 배워봅시다."
    }
]

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
    }
})

export const {addTodo} = todosSlice.actions;
export default todosSlice.reducer;