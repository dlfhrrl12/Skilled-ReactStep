
// action value
const ADD_TODO = "ADD_TODO"


// action creator 만들어서 export(컴포넌트에서 사용할 수 있도록)
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload: payload
    }
}
// state init
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

const todos = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return[...state, action.payload];
        default:
            return state;
    }
}

export default todos;