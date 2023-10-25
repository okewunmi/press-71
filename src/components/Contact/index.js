import React from "react";
import { Wrapper } from "./Contact.styles";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { TiWeatherPartlySunny } from "react-icons/ti";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

function Contact() {
  return (
    <Wrapper>
      <div className="contact">
        <div className="newsletter box">
          <main className="head">
            <h3 className="heading">Get Newsletter</h3>
            <p>Get every weekly update & weekly insight feeds</p>
          </main>

          <form>
            <input type="email" placeholder="Enter your Email" />
          </form>
          <button className="btn-contact" disabled={true}>
            subscribe now
          </button>
        </div>
        <div className="podcast box">
          <main className="head">
            <h3 className="heading">New Podcast</h3>
            <p className="txt">
              Interacting with your audience creating new relatioships,
              nurturing exist ones
            </p>
          </main>
          <p className="name">
            By: <span className="coloured">Kasali</span>
            <span className="space-around">|</span>12 FEB, 2031
          </p>
        </div>
        <div className="social box">
          <main className="head">
            <h3 className="heading">Social Connect</h3>
          </main>
          <div className="social-group">
            <div className="social-icons">
              <TiSocialFacebook className="blue" />
              <p>150980</p>
              <p className="grey">Follower</p>
              <HiArrowNarrowRight className="grey" />
            </div>
            <div className="social-icons">
              <TiSocialYoutube className="red" />
              <p>780980</p>
              <p className="grey">Follower</p>
              <HiArrowNarrowRight className="grey" />
            </div>
            <div className="social-icons">
              <TiSocialTwitter className="blue-grey" />
              <p>650980</p>
              <p className="grey">Follower</p>
              <HiArrowNarrowRight className="grey" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
