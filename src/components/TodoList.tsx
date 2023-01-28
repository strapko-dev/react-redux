import { useAppSelector } from "../hooks";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
    const todos = useAppSelector((state: any) => state.todos.list)

    return (
        <ul>
            {
            todos.map((todo: any) => 
            <TodoItem 
            key={todo.id} 
            {...todo} 
            />)
            }
        </ul>
    );
}

export default TodoList;