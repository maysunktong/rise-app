import { FaStar } from "react-icons/fa";

const Star = ({ selected, onClick}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onClick} />
);

const RatingBar = ({ totalStars = 5, selectedStars, onSelect }) => {
  return (
    <>
      {Array.from({ length: totalStars }).map((_, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onClick={() => onSelect(index + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
};

export default RatingBar;
