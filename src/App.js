import TodoList from "./TodoList";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  // stash
  //todosが追加ボタンした状態を管理するオブジェクト
  //useStateオブジェクトの更新を監視するフックス
  const [todos, setTodos] = useState([]);

  //useRefを使ってテキストエリアの要素を取得する
  const todoNameRef = useRef();

  //ボタンが押されたらタスクの追加
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    // console.log(todoNameRef.current.value);
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  // チェックボックスを反転させる関数
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // 削除ボタンが押された場合チェックされていないものを除いてフィルター関数で新しい配列を作る
  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      {/* TodoListコンポーネントを呼び出してプロップスを渡す */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClear}>削除</button>
      {/* filter関数でチェックが付いていないものだけ検知する */}
      <div>タスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
