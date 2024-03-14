export function TodoItem({completed, id, title,
    toggleTodo,deleteTodo}){
    return(
    <li>
    <label>
    <input type="checkbox" checked={completed}
    onChange={e =>toggleTodo(id, e.target.checked)}
    />
    {title}
    </label>
    <button
    onClick={()=> deleteTodo(id)}
    className="btn btn-danger" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </li>
    )
    }
    