import { AddForm } from "./AddForm";
import { TodoList } from "./TodoList";

export const ReduxTodo = () => {

    return (
        <>
            <div className="">
                <h1>Redux TODO App</h1>
                <AddForm />
                <TodoList />
            </div>
        </>
    );
}