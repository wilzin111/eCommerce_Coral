import "./SortBy.css";
import grid from "../../Assets/Icons/grid.svg";
import sortGray from "../../Assets/Icons/sort-gray.svg";

export default function SortBy() {
  return (
    <div className="sortby-container">
      <div className="sortby-content">
        <div className="display-option">
          <img src={grid} />
          <img src={sortGray} />
        </div>
        <span>Showing 1 - 40 of 145 items</span>
      </div>

      <div className="sortby-content2">
        <div className="sort-options">
          <span>To show: </span>
          <input type="number"></input>
        </div>

        <div className="sort-options">
          <span>Sort By</span>
          <select>
            <option>Position</option>
            <option>Latest Products</option>
            <option>Price - Low to High</option>
            <option>Price - High to Low</option>
            <option>Popularity</option>
            <option>Costumer Ratings</option>
          </select>
        </div>
      </div>
    </div>
  );
}
