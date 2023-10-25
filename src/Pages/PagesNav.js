import React from "react";
import { Nav } from "./pages.styles";
import { MdOutlineLocationCity } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCalendarAlt, FaNewspaper } from "react-icons/fa";
// import { TbPointFilled } from "react-icons/tb";
// import { BiSearch } from "react-icons/bi";
// import photo5 from "../../assets/preniun.jpg";
// import photo4 from "../../assets/img-2.jpeg";
// import photo1 from "../../assets/img-4.jpg";
// import Spinner from "../Spinner";
// import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

const PagesNav = () => {
  const newObject2 = new Date();
  const day = newObject2.getDay();
  const dayToDay = (day) => {
    if (day === 0) {
      return "sunday";
    } else if (day === 1) {
      return "monday";
    } else if (day === 2) {
      return "tuesday";
    } else if (day === 3) {
      return "wednesday";
    } else if (day === 4) {
      return "thursday";
    } else if (day === 5) {
      return "friday";
    } else if (day === 6) {
      return "saturday";
    }
  };
  return (
    <>
      <Nav className="nav">
        <h2 className="logo">
          press<span>71</span>
        </h2>
        <div className="weather ">
          <div className="right ">
            <MdOutlineLocationCity className="icon" />
            <p>lagos</p>
          </div>
          <div className="flex top">
            <TiWeatherPartlySunny className="icon" />
            <p>30 degree</p>
          </div>
        </div>
        <div className="weather ">
          <div className="right ">
            <FaCalendarAlt className="icon" />
            <p>{dayToDay(day)}</p>
          </div>
          <div className="flex top ">
            <FaNewspaper className="icon" />
            <p>today magasize</p>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default PagesNav;
