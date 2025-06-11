import { useSelector, useDispatch } from "react-redux";
import { incrementAvQuantity, decrementAvQuantity } from "../../redux/avSlice";
import "../../ConferenceEvent.css";

const AddsOn = () => {
  const avItems = useSelector((state) => state.av);
  const dispatch = useDispatch();

  const totalCost = avItems.reduce(
    (total, item) => total + item.cost * item.quantity,
    0
  );

  const handleAddToCart = (index) => {
    dispatch(incrementAvQuantity(index));
  };

  const handleRemoveFromCart = (index) => {
    if (avItems[index].quantity > 0) {
      dispatch(decrementAvQuantity(index));
    }
  };

  return (
    <div id="addons" className="venue_container container_main">
      <div className="text">
        <h1> Add-ons Selection</h1>
      </div>
      <div className="addons_selection">
        {avItems.map((item, index) => (
          <div className="venue_main" key={index}>
            <div className="img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="text">{item.name}</div>
            <div>${item.cost}</div>
            <div className="button_container">
              <button
                className={
                  avItems[index].quantity === 0
                    ? "btn-warning btn-disabled"
                    : "btn-minus btn-warning"
                }
                onClick={() => handleRemoveFromCart(index)}
              >
                &#8211;
              </button>
              <span className="selected_count">
                {avItems[index].quantity > 0
                  ? ` ${avItems[index].quantity}`
                  : "0"}
              </span>
              <button
                className="btn-success btn-plus"
                onClick={() => handleAddToCart(index)}
              >
                &#43;
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total_cost">Total Cost: {totalCost}</div>
    </div>
  );
};

export default AddsOn;
