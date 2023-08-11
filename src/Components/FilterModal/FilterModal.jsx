import "./FilterModal.css";
import { useState } from "react";

export const FilterModal = () => {
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [discountOpen, setDiscountOpen] = useState(false);

  return (
    <div className="filter-modal-container">
      <div className="filter-buttons">
        <button
          onClick={() => [
            setSizeOpen(true),
            setColorOpen(false),
            setBrandOpen(false),
            setPriceOpen(false),
            setDiscountOpen(false),
          ]}
        >
          Size
        </button>
        <button
          onClick={() => [
            setColorOpen(true),
            setSizeOpen(false),
            setBrandOpen(false),
            setPriceOpen(false),
            setDiscountOpen(false),
          ]}
        >
          Color
        </button>
        <button
          onClick={() => [
            setBrandOpen(true),
            setSizeOpen(false),
            setColorOpen(false),
            setPriceOpen(false),
            setDiscountOpen(false),
          ]}
        >
          Brand
        </button>
        <button
          onClick={() => [
            setPriceOpen(true),
            setSizeOpen(false),
            setColorOpen(false),
            setBrandOpen(false),
            setDiscountOpen(false),
          ]}
        >
          Price Range
        </button>
        <button
          onClick={() => [
            setDiscountOpen(true),
            setSizeOpen(false),
            setColorOpen(false),
            setBrandOpen(false),
            setPriceOpen(false),
          ]}
        >
          Discount
        </button>
      </div>

      <form>
        {sizeOpen && (
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

        {colorOpen && (
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

        {brandOpen && (
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

        {priceOpen && (
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

        {discountOpen && (
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

        <div className="filter-submit-btn">
          <button className="clear-all-filter">Clear All</button>
          <button type="submit" className="apply-filter">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};
