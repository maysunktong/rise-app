import { FaStar } from "react-icons/fa";

const Star = ({ selected, onClick}) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onClick} />
);

const RatingBar = ({ totalRatings = 5, selectedRatings = 0, onSelect }) => {
  return (
    <>
      {Array.from({ length: totalRatings }).map((_, index) => (
        <Star
          key={index}
          selected={selectedRatings > index}
          onClick={() => onSelect(index + 1)}
        />
      ))}
      <p>
        {selectedRatings} of {totalRatings}
      </p>
    </>
  );
};

export default RatingBar;
