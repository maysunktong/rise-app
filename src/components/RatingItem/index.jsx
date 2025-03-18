import { FaStar } from "react-icons/fa";

const RatingItem = ({
  selected,
  onClick,
  Icon = FaStar,
  defaultColor = "gray",
  selectedColor = "blue",
}) => (
  <Icon color={selected ? selectedColor : defaultColor} onClick={onClick} />
);

export default RatingItem;
