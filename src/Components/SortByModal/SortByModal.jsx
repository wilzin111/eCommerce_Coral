import { useState } from "react";
import "./SortByModal.css";

export const SortByModal = () => {
  const [selectedSort, setSelectedSort] = useState("Latest Products");

  function handleSort(e) {
    setSelectedSort(e.target.value);
  }

  return (
    <div>
      <div className="sortby-modal">
        <span>Sort By</span>
        <div className="gray-line"></div>
        <div className="sortby-options-modal">
          <div>
            <input
              type="radio"
              value={"Latest Products"}
              onChange={handleSort}
              checked={selectedSort == "Latest Products"}
            />
            <span>Latest Products</span>
          </div>

          <div>
            <input
              type="radio"
              value={"Price - Low to High"}
              onChange={handleSort}
              checked={selectedSort == "Price - Low to High"}
            />
            <span>Price - Low to High</span>
          </div>

          <div>
            <input
              type="radio"
              value={"Price - High to Low"}
              onChange={handleSort}
              checked={selectedSort == "Price - High to Low"}
            />
            <span>Price - High to Low</span>
          </div>

          <div>
            <input
              type="radio"
              value={"Popularity"}
              onChange={handleSort}
              checked={selectedSort == "Popularity"}
            />
            <span>Popularity</span>
          </div>

          <div>
            <input
              type="radio"
              value={"Customer Ratings"}
              onChange={handleSort}
              checked={selectedSort == "Customer Ratings"}
            />
            <span>Customer Ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
