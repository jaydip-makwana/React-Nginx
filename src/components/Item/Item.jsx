import Fruits from "../Fruits/Fruits";
import Vegetable from "../Vegetables/Vegetable";

function Item({ filter }) {
  return (
    <>
      <div>
        <Fruits filter={filter} />
        <Vegetable filter={filter} />
      </div>
    </>
  );
}

export default Item;
