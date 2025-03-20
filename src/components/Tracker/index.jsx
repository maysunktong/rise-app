import { useState } from "react";
import { FaGlassWater } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";
import MoodPicker from "../MoodPicker";
import RatingBar from "../RatingBar";
import Slider from "../Slider";

const Tracker = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [waterCount, setWaterCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [stepCount, setStepCount] = useState(0);

  const [selectedMood, setSelectedMood] = useState();

  const onAddList = () => {
    if (text.trim() !== "") {
      setList([...list, { text, waterCount, coffeeCount, stepCount, selectedMood }]);
      setText("");
      setWaterCount(0);
      setCoffeeCount(0);
      setStepCount(0);
      setSelectedMood();
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
        {list.map(({ text, waterCount, coffeeCount, stepCount, selectedMood }, index) => (
          <li key={index}>
            <div>
              {text}
              <div>
                <RatingBar
                  totalRatings={10}
                  selectedRatings={waterCount}
                  onSelect={waterCount}
                  Icon={FaGlassWater}
                  selectedColor="lightblue"
                  defaultColor="gray"
                />
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
              </div>
              <div>Steps: {stepCount}</div>
              <div>I feel {selectedMood} today.</div>
            </div>
            <button type="button" onClick={() => onDeleteItem(index)}>
              delete
            </button>
          </li>
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
          totalRatings={10}
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
      <Slider
        min={0}
        max={10000}
        step={1}
        value={stepCount}
        onChange={setStepCount}
      />
      <MoodPicker
        selectedMood={selectedMood}
        setSelectedMood={setSelectedMood}
      />
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
