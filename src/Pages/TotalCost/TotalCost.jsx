import { useSelector } from "react-redux";
import "@/index.css";

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
  const totalCost = totalItems.reduce((total, item) => {
    if (item.type === "meals") {
      if (item.selected) {
        return total + item.cost * numberOfPeople;
      }
      return total;
    } else {
      return total + item.cost * item.quantity;
    }
  }, 0);

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading">
            <h3>
              Total cost for the event: $
              {Number.isNaN(totalCost) ? 0 : totalCost.toFixed(2)}
            </h3>
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
                        ? item.selected
                          ? `${item.cost * numberOfPeople}`
                          : 0
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
