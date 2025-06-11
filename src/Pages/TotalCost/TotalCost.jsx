import { useSelector } from "react-redux";
import "../../ConferenceEvent.css";
import "./TotalCost.css";

const TotalCost = () => {
  const venueItems = useSelector((state) => state.venue).map((item) => ({
    ...item,
    type: "venue",
  }));
  const avItems = useSelector((state) => state.av).map((item) => ({
    ...item,
    type: "av",
  }));
  const mealsItems = useSelector((state) => state.meals.list).map((item) => ({
    ...item,
    type: "meals",
  }));
  const numberOfPeople = useSelector((state) => state.meals.numberOfPeople);
  const totalItems = venueItems.concat(avItems, mealsItems);

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading">
            <h3>Total cost for the event</h3>
          </p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price"></h2>
          <div className="diaplay_box1">
            <table className="table_item_data">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Unit Cost</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {totalItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.cost}</td>
                    <td>
                      {item.type === "meals"
                        ? ` For ${numberOfPeople} people`
                        : item.quantity}
                    </td>
                    <td>
                      {item.type === "meals"
                        ? `${item.cost * numberOfPeople}`
                        : `${item.cost * item.quantity}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
