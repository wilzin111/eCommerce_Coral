import { useState } from 'react';
import './ProductsFilter.css';
import BlackFridayImage from '../../Assets/ProductsPage/BlackFridayImage.png';
import PropTypes from 'prop-types'; 
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
{/*import { categories } from '../../Pages/Home/Home';*/}

const ProductsFilter = ({ handleCategorySelect, selectedCategory }) => {
  const [sizeExpanded, setSizeExpanded] = useState(false);
  const [colorExpanded, setColorExpanded] = useState(false);
  const [brandExpanded, setBrandExpanded] = useState(false);
  const [priceExpanded, setPriceExpanded] = useState(false);
  const [discountExpanded, setDiscountExpanded] = useState(false);
  const [availabilityExpanded, setAvailabilityExpanded] = useState(false);

  const handleToggle = (option) => {
    switch (option) {
      case 'size':
        setSizeExpanded(!sizeExpanded);
        break;
      case 'color':
        setColorExpanded(!colorExpanded);
        break;
      case 'brand':
        setBrandExpanded(!brandExpanded);
        break;
      case 'price':
        setPriceExpanded(!priceExpanded);
        break;
      case 'discount':
        setDiscountExpanded(!discountExpanded);
        break;
      case 'availability':
        setAvailabilityExpanded(!availabilityExpanded);
        break;
      default:
        break;
    }
  };

  ProductsFilter.propTypes = {
    selectedCategory: PropTypes.string,
    handleCategorySelect: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Breadcrumbs
        categories={[
          { text: 'Home', link: '/' },
          { text: 'Products', link: '/products' },
          { text: selectedCategory, link: `/products/${selectedCategory}` }
        ]}
      />
      <div className='products_blImageContainer'>
        <img src={BlackFridayImage} className='products_blackfriday' />
      </div>
      {selectedCategory && (
        <div className='breadcrumbs'>
          <p>Home &gt; {selectedCategory}</p>
        </div>
      )}
      {categories.map((category, index) => (
          <div key={index} className='category' onClick={() => handleCategorySelect(category.text)}>
            <span>{category.text}</span>
          </div>
        ))}
      <div className="products-filter">
        <div className="filter-option">
          <div className="filter-label" onClick={() => handleToggle('size')}>
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
          <div className="filter-label" onClick={() => handleToggle('color')}>
            <span>Color</span>
            {colorExpanded ? <span> - </span> : <span> + </span>}
          </div>
          {colorExpanded && (
            <div className="expanded-options">
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Color Option 1
              </label>
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Color Option 2
              </label>
            </div>
          )}
        </div>
        <div className="filter-option">
          <div className="filter-label" onClick={() => handleToggle('brand')}>
            <span>Brand</span>
            {brandExpanded ? <span> - </span> : <span> + </span>}
          </div>
          {brandExpanded && (
            <div className="expanded-options">
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Brand Option 1
              </label>
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Brand Option 2
              </label>
            </div>
          )}
        </div>
        <div className="filter-option">
          <div className="filter-label" onClick={() => handleToggle('price')}>
            <span>Price Range</span>
            {priceExpanded ? <span> - </span> : <span> + </span>}
          </div>
          {priceExpanded && (
            <div className="expanded-options">
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Price Option 1
              </label>
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Price Option 2
              </label>
            </div>
          )}
        </div>
        <div className="filter-option">
          <div className="filter-label" onClick={() => handleToggle('discount')}>
            <span>Discount</span>
            {discountExpanded ? <span> - </span> : <span> + </span>}
          </div>
          {discountExpanded && (
            <div className="expanded-options">
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Discount Option 1
              </label>
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Discount Option 2
              </label>
            </div>
          )}
        </div>
        <div className="filter-option">
          <div className="filter-label" onClick={() => handleToggle('availability')}>
            <span>Availability</span>
            {availabilityExpanded ? <span> - </span> : <span> + </span>}
          </div>
          {availabilityExpanded && (
            <div className="expanded-options">
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Availability Option 1
              </label>
              <label>
                <input type="checkbox" className="filter-checkbox" />
                Availability Option 2
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
