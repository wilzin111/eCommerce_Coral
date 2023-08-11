import "./SortByModal.css";

export const SortByModal = () => {
  return (
    <div>
      <div className="sortby-modal">
        <span>Sort By</span>
        <div className="gray-line"></div>
        <div className="sortby-options-modal">
          <div>
            <input type="checkbox" />
            <span>Latest Products</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Price - Low to High</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Price - High to Low</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Popularity</span>
          </div>
          <div>
            <input type="checkbox" />
            <span>Customer Ratings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
