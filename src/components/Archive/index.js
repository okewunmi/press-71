import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./Archive.styles";
import { TbPointFilled } from "react-icons/tb";
import Spinner from "../Spinner";
const url = "";

const Archive = () => {
  const [cryptoNew, setcryptoNew] = useState({});
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getCrypto = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setcryptoNew(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCrypto();
  }, []);

  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">Crypto News</h2>
        <div className="underline"></div>
      </div>

      <Content>
        {/* {cryptoNew.map((index) => {
          // const {} = index;
          return ( */}
        <div className="left">
          {loading && <Spinner />}
          <div className="text">
            <div className="left-head">
              <TbPointFilled className="left-icon" />
              <p className="left-text">hot topic</p>
            </div>
            <div className="left-txt">
              <a target="_blank" rel="noopener noreferrer" href="link">
                <p className="left-txt--head">
                  Indian Crypto Companies Migrate Amidst Unclear Regulations
                </p>
              </a>
            </div>
            <div className="left-time">
              <p className="minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción </span>
              </p>
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
        <div className="center">
          <div className="center--box">
            <p className="center--txt">hot topic</p>
          </div>
          <div className="center--text">
            <a href="w" className="center--link">
              <p>
                Google's Pixel 7 and 7 Pro’s design gets revealed even more with
                fresh crisp renders
              </p>
            </a>
            <div className="center--time">
              <p className="center--minute">30 Minute ago</p>
              <p>
                by: <span className="blue-grey">Redacción Willianm </span>
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="btn">
            <button>Next</button>
            <button>Prev</button>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Archive;
