import { useState } from "react";
import "./ConferenceEvent.css";
import TotalCost from "./Pages/TotalCost/TotalCost";
import { Link, Outlet } from "react-router-dom";

const ConferenceEvent = () => {
  const [showItems, setShowItems] = useState(false);

  const handleToggleItems = () => {
    console.log("handleToggleItems called");
    setShowItems(!showItems);
  };

  const ItemsDisplay = ({ items }) => {};

  return (
    <div className={"event-list-container"}>
      <navigator className="navbar_event_conference">
        <div className="company_logo">Conference Expense Planner</div>
        <div className="left_navbar">
          <div className="nav_links">
            <Link to="/venue">Venue</Link>
            <Link to="/adds-on">Add-ons</Link>
            <Link to="/meals">Meals</Link>
          </div>
          <button
            className="details_button"
            onClick={() => setShowItems(!showItems)}
          >
            Show Details
          </button>
        </div>
      </navigator>
      <div className="main_container">
        {!showItems ? (
          <div className="items-information">
            {/* Venue Selection */}
            <Outlet />
          </div>
        ) : (
          <div className="total_amount_detail">
            <TotalCost />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConferenceEvent;
