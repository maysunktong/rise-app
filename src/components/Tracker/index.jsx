import { useState } from "react";

const Tracker = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const onAddText = () => {
    setList([...list, text]);
    setText("");
  };

  const onClearList = () => {
    setList([]);
  };

  const onDeleteItem = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <ul>
        {list.map((text, index) => (
          <div>
            <li key={index}>{text}</li>
            <button type="button" onClick={() => onDeleteItem(index)}>
              delete
            </button>
          </div>
        ))}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write something"
      />
      <button onClick={onAddText} type="button">
        Add
      </button>
      <button onClick={onClearList} type="button">
        Clear
      </button>
    </div>
  );
};
export default Tracker;
