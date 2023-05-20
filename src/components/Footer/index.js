import React from "react";
import { Wrapper } from "./Footer.styles";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import photo3 from "../../assets/img-2.jpeg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="footer__logo">
          <h2 className="logo">
            press<span>71</span>
          </h2>
          <div className="icons__box">
            <div className="icon">
              <TiSocialFacebook />
            </div>
            <div className="icon">
              <TiSocialTwitter />
            </div>
            <div className="icon">
              <TiSocialFacebook />
            </div>
            {/* <div className="icon">
              <TiSocialTwitter />
            </div> */}
            <div className="icon">
              <TiSocialYoutube />
            </div>
          </div>
        </div>
        <div className="footer__recent">
          <h3>Recent posts</h3>
          <div className="footer__recent--box">
            <img src={photo3} alt="name" className="footer__recent--img" />
            <div className="footer__recent--txt">
              <p className="head">
                Indian Crypto Companies Migrate Amidst Unclear Regulations
              </p>
              <p className="txt">December 30-2023</p>
            </div>
          </div>
          <div className="footer__recent--box">
            <img src={photo3} alt="name" className="footer__recent--img" />
            <div className="footer__recent--txt">
              <p className="head">
                Indian Crypto Companies Migrate Amidst Unclear Regulations
              </p>
              <p className="txt">December 30-2023</p>
            </div>
          </div>
        </div>
        <div className="footer__category">
          <h3>popular categories</h3>
          <div className="footer__category--txt">
            <p>Stories</p>
            <p>35</p>
          </div>
          <div className="footer__category--txt">
            <p>Health</p>
            <p>99</p>
          </div>
          <div className="footer__category--txt">
            <p>Local News</p>
            <p>120</p>
          </div>
          <div className="footer__category--txt">
            <p>Education</p>
            <p>78</p>
          </div>
          <div className="footer__category--txt">
            <p>Video</p>
            <p>20</p>
          </div>
        </div>
        <div className="footer__feed">
          <h3>Recent tweets</h3>
          <div className="footer__recent--box">
            <div className="twitter">
              <TiSocialTwitter />
            </div>
            <div className="footer__recent--txt">
              <p className="head">
                Carsafe -#Gutenbergts, Car Dealer available on{" "}
                <span>@website https://website.net</span>
              </p>
              <p className="txt">April 30, 2023</p>
            </div>
          </div>
          <div className="footer__recent--box">
            <div className="twitter">
              <TiSocialTwitter />
            </div>
            <div className="footer__recent--txt">
              <p className="head">
                Carsafe -#Gutenbergts, Car Dealer available on{" "}
                <span>@website https://website.net</span>
              </p>
              <p className="txt">April 30, 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__comment">
        <p>
          All thanks to
          <span>
            <a href="https://newsdata.io/"> NewsData API </a>
          </span>
          <span> && </span>
          <span>
            <a href="https://newsapi.org/"> NEWSAPI </a>
          </span>
          for providing access to news articles from all over the world
        </p>
      </div>
    </Wrapper>
  );
};
export default Footer;
