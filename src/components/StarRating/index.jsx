import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const createArray = () => {
   return Array.from({ length: totalStars })
  }

  const Star = ({ selected = false, onSelect = (star) => star }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
  );

  return (
    <>
      {createArray(totalStars).map((_, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => setSelectedStars(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
