import React from "react";
import { Wrapper } from "./PageNav.styles";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineMedicalInformation, MdSports, MdRadio } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { GiCongress } from "react-icons/gi";
// import { Link } from "react-router-dom";
// import { PiTelevsionDuotone } from "react-icons/";
// import BusinessPage from "../Pages/BusinessPage";
const PageNav = () => {
  return (
    <Wrapper>
      <nav className="nav-section">
        <div className="nav-section__box">
          <FaBusinessTime className="Button__icons" />
          <p>Business</p>

          <button>
            {/* <Link to="Business"> */}
            <HiArrowNarrowRight />
            {/* </Link> */}
          </button>
        </div>

        <div className="nav-section__box">
          <MdRadio className="Button__icons" />
          <p>Entertainment</p>
          <button>
            <HiArrowNarrowRight />
          </button>
        </div>
        <div className="nav-section__box">
          <MdOutlineMedicalInformation className="Button__icons" />
          <p>Health</p>
          <button>
            <HiArrowNarrowRight />
          </button>
        </div>
        <div className="nav-section__box">
          <GiCongress className="Button__icons" />
          <p>Politics</p>
          <button>
            <HiArrowNarrowRight />
          </button>
        </div>
        <div className="nav-section__box">
          <MdSports className="Button__icons" />
          <p>Sports</p>
          <button>
            <HiArrowNarrowRight />
          </button>
        </div>
        <div className="nav-section__box">
          <GrTechnology className="Button__icons" />
          <p>Technology</p>
          <button>
            <HiArrowNarrowRight />
          </button>
        </div>
      </nav>
    </Wrapper>
  );
};

export default PageNav;
