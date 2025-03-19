import { useState } from "react";
import { FaGlassWater } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";
import RatingBar from "../RatingBar";
import RatingSlider from '../RatingSlider';

const Tracker = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [waterCount, setWaterCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  const onAddList = () => {
    if (text.trim() !== "") {
      setList([...list, { text, waterCount, coffeeCount }]);
      setText("");
      setWaterCount();
      setCoffeeCount();
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
        {list.map(({ text, waterCount, coffeeCount }, index) => (
          <div>
            <li key={index}>
              {text}
              <div>
                <RatingBar
                  totalRatings={5}
                  selectedRatings={waterCount}
                  onSelect={waterCount}
                  Icon={FaGlassWater}
                  selectedColor="lightblue"
                  defaultColor="gray"
                />
                <p>water count:</p>
              </div>
              <div>
                <RatingBar
                  totalRatings={10}
                  selectedRatings={coffeeCount}
                  onSelect={coffeeCount}
                  Icon={PiCoffeeBeanFill}
                  selectedColor="brown"
                  defaultColor="gray"
                />
                <p>coffee count:</p>
              </div>
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
          selectedColor="lightblue"
          defaultColor="gray"
        />
        <RatingBar
          totalRatings={10}
          selectedRatings={coffeeCount}
          onSelect={setCoffeeCount}
          Icon={PiCoffeeBeanFill}
          selectedColor="brown"
          defaultColor="gray"
        />
      </div>
      <RatingSlider min={0} max={10000} step={1} defaultValue={0}  />
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
