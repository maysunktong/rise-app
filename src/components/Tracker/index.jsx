import { format } from "date-fns";
import { useEffect, useState } from "react";
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
  const [sleepCount, setSleepCount] = useState(0);
  const [selectedMood, setSelectedMood] = useState("How are you?");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("trackerList")) || [];
    setList(storedList);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("trackerList", JSON.stringify(list));
    }
  }, [list]);

  const onAddList = () => {
    if (text.trim() !== "") {
      const newList = {
        text,
        waterCount,
        coffeeCount,
        stepCount,
        sleepCount,
        selectedMood,
      };
      setText("");
      setWaterCount(0);
      setCoffeeCount(0);
      setStepCount(0);
      setSleepCount(0);
      setSelectedMood("How are you?");

      const updatedList = [newList, ...list];
      setList(updatedList);
      localStorage.setItem("trackerList", JSON.stringify(updatedList));
    }
  };

  const onClearList = () => {
    setText("");
    setWaterCount(0);
    setCoffeeCount(0);
    setStepCount(0);
    setSleepCount(0);
    setSelectedMood("How are you?");
    setList([]);
    localStorage.removeItem("trackerList");
  };

  const onDeleteItem = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
    localStorage.setItem("trackerList", JSON.stringify(updatedList));
  };

  const date = format(new Date(), "MMMM dd");
  const time = format(new Date(), "HH:mm");

  return (
    <>
      <ul>
        {list.map(
          (
            {
              text,
              waterCount,
              coffeeCount,
              stepCount,
              sleepCount,
              selectedMood,
            },
            index
          ) => (
            <li key={index}>
              <div>
                <p>Created on {date}</p>
                <p>Time: {time}</p>
                <p>{text}</p>
                <div>
                  <RatingBar
                    totalRatings={10}
                    selectedRatings={waterCount}
                    Icon={FaGlassWater}
                    selectedColor="lightblue"
                    defaultColor="gray"
                  />
                </div>
                <div>
                  <RatingBar
                    totalRatings={10}
                    selectedRatings={coffeeCount}
                    Icon={PiCoffeeBeanFill}
                    selectedColor="brown"
                    defaultColor="gray"
                  />
                </div>
                <div>Sleep: {sleepCount} hrs</div>
                <div>Steps: {stepCount}</div>
                <div>I feel {selectedMood} today.</div>
              </div>
              <button type="button" onClick={() => onDeleteItem(index)}>
                Delete
              </button>
            </li>
          )
        )}
      </ul>
      <div className="form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write something"
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
        <Slider
          min={0}
          max={12}
          step={0.5}
          value={sleepCount}
          onChange={setSleepCount}
        />
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
