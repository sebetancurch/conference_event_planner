import { useState } from "react";
import TotalCost from "../TotalCost/TotalCost";
import { Link, Outlet, useLocation } from "react-router-dom";
import "@/index.css";

const ConferenceEvent = () => {
  const [showItems, setShowItems] = useState(false);
  const path = useLocation().pathname.split("/").pop();

  return (
    <div className="event-list-container">
      <navigator className="navbar_event_conference">
        <div className="company_logo">Conference Expense Planner</div>
        <div className="left_navbar">
          <div className="nav_links">
            <Link className={path === "venue" ? "active" : ""} to="/venue">
              Venue
            </Link>
            <Link className={path === "adds-on" ? "active" : ""} to="/adds-on">
              Add-ons
            </Link>
            <Link className={path === "meals" ? "active" : ""} to="/meals">
              Meals
            </Link>
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
