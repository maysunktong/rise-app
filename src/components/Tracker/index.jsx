import { useState } from "react";
import StarRating from "../StarRating";

const Tracker = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const onAddList = () => {
    if (text.trim() !== "") {
      setList([...list, text]);
      setText("");
    }
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
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write something"
        />
      </div>
      <button onClick={onAddList} type="button">
        Add
      </button>
      <button onClick={onClearList} type="button">
        Clear
      </button>
      <StarRating />
    </div>
  );
};

export default Tracker;
