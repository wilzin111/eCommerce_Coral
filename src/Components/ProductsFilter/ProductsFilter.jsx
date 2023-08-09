import "./ProductsFilter.css";
import { useState } from "react";

const ProductsFilter = () => {
  const [sizeExpanded, setSizeExpanded] = useState(false);
  const [colorExpanded, setColorExpanded] = useState(false);
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [discountExpanded, setDiscountExpanded] = useState(false);
  const [availabilityExpanded, setAvailabilityExpanded] = useState(false);

  const handleToggle = (option) => {
    switch (option) {
      case "size":
        setSizeExpanded(!sizeExpanded);
        break;
      case "color":
        setColorExpanded(!colorExpanded);
        break;
      case "brand":
        setBrandExpanded(!brandExpanded);
        break;
      case "price":
        setPriceExpanded(!priceExpanded);
        break;
      case "discount":
        setDiscountExpanded(!discountExpanded);
        break;
      case "availability":
        setAvailabilityExpanded(!availabilityExpanded);
        break;
      default:
        break;
    }
  };

  return (
    <div className="products-filter-container">
      <div className="filter-option">
        <div className="filter-label" onClick={() => handleToggle("size")}>
          <span>Size</span>
          {sizeExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {sizeExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Size Option 1
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Size Option 2
            </label>
          </div>
        )}
      </div>
      <div className="filter-option">
        <div className="filter-label" onClick={() => handleToggle("color")}>
          <span>Color</span>
          {colorExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {colorExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Blue
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Teal
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Aquamarine
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Off-white
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Marron Red
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Crimson Red
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Seinna Pink
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Muave Orange
            </label>
          </div>
        )}
      </div>
      <div className="filter-option">
        <div className="filter-label" onClick={() => handleToggle("brand")}>
          <span>Brand</span>
          {brandExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {brandExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Zara
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              D&G
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              H&M
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Chanel
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              Prada
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              BIBA
            </label>
          </div>
        )}
      </div>
      <div className="filter-option">
        <div className="filter-label" onClick={() => handleToggle("price")}>
          <span>Price Range</span>
          {priceExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {priceExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              $10.00 - $40.00
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              $41.00 - $80.00
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              $81.00 - $120.00
            </label>
          </div>
        )}
      </div>
      <div className="filter-option">
        <div className="filter-label" onClick={() => handleToggle("discount")}>
          <span>Discount</span>
          {discountExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {discountExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              10%
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              15%
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              20%
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              30%
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              50%
            </label>
          </div>
        )}
      </div>
      <div className="filter-option">
        <div
          className="filter-label"
          onClick={() => handleToggle("availability")}
        >
          <span>Availability</span>
          {availabilityExpanded ? <span> - </span> : <span> + </span>}
        </div>
        {availabilityExpanded && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" />
              10 - 50
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              51 - 100
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              101 - 150
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" />
              151 - 200
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsFilter;
