import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  handleInput = (e) => {
    setItem(e.target.value);
  };

  onAdd = (e) => {
    e && e.preventDefault();
    let lists = list;
    lists.push({ checked: false, title: item });
    setList([...lists]);
    setItem("");
  };

  toggleCheck = (idx, isCheck) => {
    let lists = list;
    let item = lists[idx];
    item.checked = !isCheck;
    lists[idx] = item;
    setList([...lists]);
  };

  onDele = (idx) => {
    let lists = list.filter((item, i) => i !== idx);
    setList([...lists]);
  };

  return (
    <div className="App">
      <h2 className="app-header">ToDo App</h2>
      <div className="inputBox">
        <input placeholder="Enter Todo" value={item} onChange={handleInput} />
        <button onClick={onAdd}>Add</button>
      </div>
      <ul>
        {list.map((item, idx) => (
          <li>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => {
                toggleCheck(idx, item.checked);
              }}
            />{" "}
            <span className={item.checked ? "strick" : ""}>{item.title}</span>
            <button
              onClick={(e) => {
                onDele(idx);
              }}
            >
              <img src="./dele.png" width="20px" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
