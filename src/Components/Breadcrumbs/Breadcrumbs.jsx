import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumbs = ({ categories }) => {
  return (
    <div className="breadcrumbs">
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <a href={category.link}>{category.text}</a>
          {index !== categories.length - 1 && <span> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;