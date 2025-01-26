import { useSelector } from "react-redux";

export const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    console.log("todos => ", todos);
    return (
        <>
            <div className="">
                {todos.map(function(todo){
                    return <div key={todo.id}>
                        {todo.title}
                    </div>
                })}
            </div>
        </>
    );
}