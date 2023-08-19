import "./FilterModal.css";
import { useEffect, useState } from "react";

export const FilterModal = ({ handleOption }) => {
  const [selectedButton, setSelectedButton] = useState("Size");
  const [selectedOption, setSelectedOption] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedOption((doc) => [...doc, value]);
    } else {
      setSelectedOption((doc) => doc.filter((option) => option != value));
    }
    console.log(selectedOption);
  }

  useEffect(() => {
    const handleFilter = () => {
      handleOption(selectedOption);
    };

    handleFilter();
  }, [selectedOption]);

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
              <input
                type="checkbox"
                className="filter-checkbox"
                value="blue"
                onChange={handleChange}
              />
              Blue
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="teal"
                onChange={handleChange}
              />
              Teal
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="aquamarine"
                onChange={handleChange}
              />
              Aquamarine
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="off-white"
                onChange={handleChange}
              />
              Off-white
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="marron-red"
                onChange={handleChange}
              />
              Marron Red
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="crimson-red"
                onChange={handleChange}
              />
              Crimson Red
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="seinna-pink"
                onChange={handleChange}
              />
              Seinna Pink
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="muave-orange"
                onChange={handleChange}
              />
              Muave Orange
            </label>
          </div>
        )}

        {selectedButton == "Brand" && (
          <div className="expanded-options">
            <label>
              <input type="checkbox" className="filter-checkbox" value="zara" />
              Zara
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" value="d&g" />
              D&G
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" value="h&m" />
              H&M
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="chanel"
              />
              Chanel
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="prada"
              />
              Prada
            </label>
            <label>
              <input type="checkbox" className="filter-checkbox" value="biba" />
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
              <input type="checkbox" className="filter-checkbox" value="ten" />
              10%
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="fifteen"
              />
              15%
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="twenty"
              />
              20%
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="thirty"
              />
              30%
            </label>
            <label>
              <input
                type="checkbox"
                className="filter-checkbox"
                value="fifty"
              />
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
