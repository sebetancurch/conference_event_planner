import ConferenceEvent from "./ConferenceEvent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/AboutUs/AboutUs";
import Venue from "./Pages/Venue/venue";
import Meals from "./Pages/Meals/meals";
import AddsOn from "./Pages/Adds-On/adds-on";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/" element={<ConferenceEvent />}>
          <Route index path="/venue" element={<Venue />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/adds-on" element={<AddsOn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
