import React from "react";
import "./MoreShortly.css";
import notMore from "../../Assets/notFound/notFound.png";
import seta from "../../Assets/Wishlist/arrow.svg";

const MoreShortly = (prop) => {
  return (
    <div className="container-MoreShortly">
      <img src={notMore} alt="" />
      <h1>We are working on these functions, come back soon</h1>
      <button
        onClick={() => {
          prop.component(-1);
        }}
      >
        Return
      </button>
    </div>
  );
};

export default MoreShortly;
