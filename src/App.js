import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>ボタンが押された回数は {count}</p>
      <button onClick={increment}>加算ボタン</button>
    </div>
  );
};
export default App;
