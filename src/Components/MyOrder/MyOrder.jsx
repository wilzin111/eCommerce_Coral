import { useEffect, useState } from "react";
import "./MyOrder.css";
import right from "./../../Assets/Icons/chevron-right.svg";
import seta from "../../Assets/Wishlist/arrow.svg";
import bag from '../../Assets/Icons/bagWishlist.svg';
import arrow from "./../../Assets/Icons/chevron-right.svg";


export default function MyOrder(prop) {

  const [checkboxes, setCheckboxes] = useState([false, false, false, false, false, false]);
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  function handleDisplay(e) {
    const completed = document.getElementById("my_order_display_buttons_1");
    const processing = document.getElementById("my_order_display_buttons_2");
    const cancelled = document.getElementById("my_order_display_buttons_3");

    completed.classList.remove("my_order_display_buttons_selected");
    processing.classList.remove("my_order_display_buttons_selected");
    cancelled.classList.remove("my_order_display_buttons_selected");

    switch (e) {
      case 1:
        completed.classList.add("my_order_display_buttons_selected");
        break;
      case 2:
        processing.classList.add("my_order_display_buttons_selected");
        break;
      case 3:
        cancelled.classList.add("my_order_display_buttons_selected");
        break;

      default:
        break;
    }
  }
  const [mob, setMob] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setMob(window.innerWidth < 900);
    };
    handleResize();
  }, []);

  return (
    <>
      {mob ?
        <div className="container-order-mob">
          <div className="orders-header">
            <div className="header-order-start">
              <button onClick={() => { prop.component(-1) }}>
                <img src={seta} alt="close-modal" />
              </button>
              <p>My Orders</p>
            </div>
            <button>
              <img src={bag} alt="bag" />
            </button>

          </div>

          <div className="btn-cpc-orders">
            <button>
              <p>Completed</p>
            </button>
            <button>
              <p>Processing</p>
            </button>
            <button>
              <p>Cancelled</p>
            </button>
          </div>

          <div className="container-orders">
            <div className="q-orders">
              <p> 4 Order(s)</p>
            </div>

            <div className="container-order">
              <div className="order-text">
                <p>September 5, 2020</p>
                <p>#874522648</p>
                <p>$218.50</p>
              </div>
              <div className="order-arrow">
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="container-order">
              <div className="order-text">
                <p>September 5, 2020</p>
                <p>#874522648</p>
                <p>$218.50</p>
              </div>
              <div className="order-arrow">
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="container-order">
              <div className="order-text">
                <p>September 5, 2020</p>
                <p>#874522648</p>
                <p>$218.50</p>
              </div>
              <div className="order-arrow">
                <button>
                  <img src={arrow} alt="" />
                </button>
              </div>
            </div>
            
          </div>

        </div>
        :
        <div className="my_order flex_column">
          <div className="flex_row my_order_display_buttons_container">
            <button
              id="my_order_display_buttons_1"
              type="button"
              className="my_order_display_buttons my_order_display_buttons_selected my_order_typography my_order_color_lowenphasis"
              name="displaying"
              onClick={() => handleDisplay(1)}
            >
              Completed
            </button>
            <button
              id="my_order_display_buttons_2"
              type="button"
              className="my_order_display_buttons my_order_typography my_order_color_lowenphasis"
              name="displaying"
              onClick={() => handleDisplay(2)}
            >
              Processing
            </button>
            <button
              id="my_order_display_buttons_3"
              type="button"
              className="my_order_display_buttons my_order_typography my_order_color_lowenphasis"
              name="displaying"
              onClick={() => handleDisplay(3)}
            >
              Cancelled
            </button>
          </div>

          <div className="my_order_list">
            <div className="my_order_label my_order_typography">
              <span className="my_order_typography my_order_color_lowenphasis">
                Order ID
              </span>
              <span className="my_order_typography my_order_color_lowenphasis">
                Date
              </span>
              <span className="my_order_typography my_order_color_lowenphasis">
                Price
              </span>
              <span className="my_order_typography my_order_color_lowenphasis display_above_1000px">
                Status
              </span>
            </div>
            <div className="my_order_orders flex_column">
              {checkboxes.map((isChecked, index) => (
                <div key={index} className="my_order_order flex_row">
                  {" "}
                  <input
                    key={index}
                    className="checked"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                    style={{ marginRight: "5px" }}
                  />
                  <p className="absolute left_8p" >#874522648</p>
                  <p className="absolute left_30p" >
                    September 5,
                    <br /> 2020
                  </p>
                  <p className="absolute left_50p" >$218.50</p>
                  <p className="absolute left_70p display_above_1000px">Paid</p>
                  <img
                    src={right}
                    className="icon left_15rem absolute"
                    style={{ alignSelf: "center" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}
