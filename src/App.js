import TodoList from "./TodoList";
import { useState } from "react";


function App() {
  //todosが追加ボタンした状態を管理するオブジェクト
  //useStateオブジェクトの更新を監視するフックス
  const [todos] = useState([
    { id: 1, name: "タスク１", completed: false}
  ]);

  return (
    <>
        {/* TodoListコンポーネントを呼び出してプロップスを渡す */}
        <TodoList todos={todos}/>
        <input type="text" name="" id="" />
        <button>ADD</button>
        <button>DELETE</button>
        <div>残りのタスク:0</div>
    </>
  );
}

export default App;
