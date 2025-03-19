import { useState } from "react";
import RatingBar from "../RatingBar";
import { FaGlassWater } from 'react-icons/fa6';

const Tracker = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [waterCount, setWaterCount] = useState(0);

  const onAddList = () => {
    if (text.trim() !== "") {
      setList([...list, { text, waterCount }]);
      setText("");
      setWaterCount();
    }
  };

  const onClearList = () => {
    setList([]);
  };

  const onDeleteItem = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <ul>
        {list.map(({ text, waterCount }, index) => (
          <div>
            <li key={index}>
              {text} ⭐ {waterCount}
            </li>
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
        <RatingBar
          totalRatings={5}
          selectedRatings={waterCount}
          onSelect={setWaterCount}
          Icon={FaGlassWater}
        />
      </div>
      <button onClick={onAddList} type="button">
        Add
      </button>
      <button onClick={onClearList} type="button">
        Clear
      </button>
    </>
  );
};

export default Tracker;
