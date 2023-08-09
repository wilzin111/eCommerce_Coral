import "./FilterMobile.css";
import filter from "../../Assets/Icons/filter.svg";
import sort from "../../Assets/Icons/sort.svg";

export default function FilterMobile() {
  return (
    <div className="filter-mob-container">
      <button className="filter-mob">
        <img src={sort} />
        <span>SORT</span>
      </button>
      <button className="filter-mob">
        <img src={filter} />
        <span>FILTER</span>
      </button>
    </div>
  );
}
