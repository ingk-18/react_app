import React, { useState } from "react";

function ArrayExample() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    // 新しいアイテムを生成し、現在の配列に追加する
    const newItem = `アイテム ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayExample;
