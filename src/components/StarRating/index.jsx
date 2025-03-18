import { FaStar } from "react-icons/fa";

const Star = ({ selected, onSelect }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const StarRating = ({ totalStars = 5, selectedStars = 0, onRate }) => {
  return (
    <>
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => onRate(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
