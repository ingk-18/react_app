import React from "react";
import Todo from "./Todo";

// todoリストとクリックされたリストを受け取る
const TodoList = ({ todos, toggleTodo }) => {
  throw hoge;
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;
