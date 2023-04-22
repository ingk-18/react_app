import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  // チェックボックスクリックされたら、反転させる関数に値を渡す
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        <input 
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}/>
      </label>
      {todo.name}
    </div>
  )
}

export default Todo;