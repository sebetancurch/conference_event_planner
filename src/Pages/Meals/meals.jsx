import { useDispatch, useSelector } from "react-redux";
import { toggleMealSelection, setNumberOfPeople } from "../../redux/mealsSlice";
import "@/index.css";

const Meals = () => {
  const mealsItems = useSelector((state) => state.meals.list);
  const numberOfPeople = useSelector((state) => state.meals.numberOfPeople);
  const dispatch = useDispatch();
  const totalCost = () => {
    const selectedMeals = mealsItems.filter((item) => item.selected);
    if (selectedMeals) {
      return selectedMeals.reduce(
        (total, item) =>
          total +
          item.cost * (Number.isNaN(numberOfPeople) ? 0 : numberOfPeople),
        0
      );
    }
  };

  const handleSetNumberOfPeople = (number) => {
    dispatch(setNumberOfPeople(number));
  };

  const handleMealSelection = (index) => {
    dispatch(toggleMealSelection(index));
  };

  return (
    <div id="meals" className="venue_container container_main">
      <div className="text">
        <h1>Meals Selection</h1>
      </div>

      <div className="input-container venue_selection">
        <label htmlFor="numberOfPeople">
          <h3>Number of People:</h3>
        </label>
        <input
          type="number"
          className="input_box5"
          id="numberOfPeople"
          value={numberOfPeople}
          onChange={(e) => handleSetNumberOfPeople(parseInt(e.target.value))}
          min="1"
        />
      </div>
      <div className="meal_selection">
        {mealsItems.map((item, index) => (
          <div className="meal_item" key={index} style={{ padding: 15 }}>
            <div className="inner">
              <input
                type="checkbox"
                id={`meal_${index}`}
                checked={item.selected}
                onChange={() => handleMealSelection(index)}
              />
              <label htmlFor={`meal_${index}`}> {item.name} </label>
            </div>
            <div className="meal_cost">${item.cost}</div>
          </div>
        ))}
      </div>
      <div className="total_cost">Total Cost: {totalCost()}</div>
    </div>
  );
};

export default Meals;
