import RatingItem from '../RatingItem';

const RatingBar = ({
  totalRatings = 5,
  selectedRatings = 0,
  onSelect,
  Icon,
  defaultColor,
  selectedColor,
}) => {
  return (
    <>
      {Array.from({ length: totalRatings }).map((_, index) => (
        <RatingItem
          key={index}
          selected={selectedRatings > index}
          onClick={() => onSelect(index + 1)}
          Icon={Icon}
          selectedColor={selectedColor}
          defaultColor={defaultColor}
        />
      ))}
      <p>
        {selectedRatings} of {totalRatings}
      </p>
    </>
  );
};

export default RatingBar;
