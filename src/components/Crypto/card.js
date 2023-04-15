import React from "react";
import { Card } from "./crypto.styles";
import photo4 from "../../assets/img-4.jpg";

const CardView = ({}) => {
  return (
    <Card>
      <div className="Premium__box">
        <div className="Premium__img--box">
          <img src={photo4} alt="imageurl" className="Premium__img" />
        </div>
        <div className="Premium__content">
          <div className="Premium__time">
            <p className="grey">Google News</p>
            <p className="blue-grey">9.00 pm</p>
          </div>
          <p className="Premium__time-txt">
            North Korea Is Now Mining Crypto to Launder Its Stolen Loot
          </p>
        </div>
      </div>
    </Card>
  );
};
export default CardView;
