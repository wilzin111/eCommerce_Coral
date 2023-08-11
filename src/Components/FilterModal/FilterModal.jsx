import "./FilterModal.css";
import { useState } from "react";

export const FilterModal = () => {
  const [selectedButton, setSelectedButton] = useState("Size");

  return (
    <div className="filter-modal-container">
      <div className="filter-buttons">
        <button
          onClick={() => setSelectedButton("Size")}
          style={
            selectedButton == "Size"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: " #f1f1f1", color: "#626262" }
          }
        >
          Size
        </button>
        <button
          onClick={() => setSelectedButton("Color")}
          style={
            selectedButton == "Color"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: " #f1f1f1", color: "#626262" }
          }
        >
          Color
        </button>

        <button
          onClick={() => setSelectedButton("Brand")}
          style={
            selectedButton == "Brand"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: " #f1f1f1", color: "#626262" }
          }
        >
          Brand
        </button>

        <button
          onClick={() => setSelectedButton("Price Range")}
          style={
            selectedButton == "Price Range"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: " #f1f1f1", color: "#626262" }
          }
        >
          Price Range
        </button>

        <button
          onClick={() => setSelectedButton("Discount")}
          style={
            selectedButton == "Discount"
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: " #f1f1f1", color: "#626262" }
          }
        >
          Discount
        </button>
      </div>

      <form>
        {selectedButton == "Size" && (
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

        {selectedButton == "Color" && (
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

        {selectedButton == "Brand" && (
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

        {selectedButton == "Price Range" && (
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

        {selectedButton == "Discount" && (
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
