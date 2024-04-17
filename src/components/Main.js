import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import CallToAction from "./CallToAction";
import ConfirmedBooking from "../pages/ConfirmedBooking";

const Main = () => {
  return (
    <main>
      <CallToAction />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/confirm-booking" element={<ConfirmedBooking />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
