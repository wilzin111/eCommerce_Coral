import "./FilterMobile.css";
import filter from "../../Assets/Icons/filter.svg";
import sort from "../../Assets/Icons/sort.svg";
import cross from "../../Assets/Icons/cross.svg";
import { SortByModal } from "../SortByModal/SortByModal";
import { useEffect, useState } from "react";
import { FilterModal } from "../FilterModal/FilterModal";

export default function FilterMobile({ choosenOption }) {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  function handleOption(value) {
    setSelectedOption(value);
  }

  useEffect(() => {
    const handleFilter = () => {
      choosenOption(selectedOption);
    };

    handleFilter();
  }, []);

  return (
    <div>
      <div className="filter-mob-container">
        <button className="filter-mob" onClick={() => setSortOpen(true)}>
          <img src={sort} />
          <span>SORT</span>
        </button>
        <button className="filter-mob" onClick={() => setFilterOpen(true)}>
          <img src={filter} />
          <span>FILTER</span>
        </button>
      </div>
      {sortOpen && (
        <div>
          <div
            className="sortby-background"
            onClick={() => setSortOpen(false)}
          ></div>
          <SortByModal />
        </div>
      )}
      {filterOpen && (
        <div className="filter-modal">
          <div className="filter-modal-topbar">
            <h2>Filters</h2>
            <img src={cross} onClick={() => setFilterOpen(false)} />
          </div>
          <FilterModal handleOption={handleOption} />
        </div>
      )}
    </div>
  );
}
