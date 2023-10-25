import React, { useState, useEffect } from "react";
import { Card, Wrapper } from "./Politics.styles";

import { HiArrowNarrowRight } from "react-icons/hi";
// import {
//   AiOutlineComment,
//   AiOutlineDislike,
//   AiOutlineLike,
// } from "react-icons/ai";
import photo1 from "../../assets/img-4.jpg";
// import Spinner from "../Spinner";
const Politics = () => {
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=politics";

  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState(0);

  // const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setNews(data.results);
        setNextPage(data.nextPage);
      } catch (err) {
        console.log(err);
      }
    };
    getNews();
  }, []);

  const loadMore = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=politics&page=${nextPage}`
    );
    const data = await response.json();
    setNews([...data.results, ...data.results]);
    setNextPage(data.nextPage);
  };

  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">Politics</h2>
        <hr className="underline"></hr>
      </div>
      {/* {loading && <Spinner />} */}
      <Card>
        {news &&
          news.length > 0 &&
          news.map((items, index) => {
            const { link, pubDate, title, creator, image_url } = items;
            const newObject = new Date(pubDate);
            const year = newObject.getFullYear();
            const month = newObject.toLocaleString("en-US", {
              month: "long",
            });
            const day = newObject.getDate();
            const formatedDate = [day, month, year].join(" ");

            return (
              <div className="Premium__box" key={index}>
                <div className="Premium__img--box">
                  <div className="Premium__img--circle">
                    <p>{index + 1}</p>
                  </div>
                  <img
                    src={image_url || photo1}
                    alt="imageurl"
                    className="Premium__img"
                  />
                </div>
                <div className="Premium__content">
                  <div className="Premium__time">
                    <p className="grey creator">
                      {creator && creator > 0 && creator.length > 16
                        ? creator.slice(0, 16)
                        : creator}
                    </p>
                    <p className="blue-grey">{formatedDate || "9.00 pm"}</p>
                  </div>
                  <div>
                    <p className="Premium__time-txt">
                      <a href={link}>
                        {title ||
                          "North Korea Is Now Mining Crypto to Launder Its Stolen Loot"}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </Card>
      <div className="btn-box">
        <button className="btn-box--cicle btn-box__white" onClick={loadMore}>
          View more <HiArrowNarrowRight />
        </button>
      </div>
    </Wrapper>
  );
};

export default Politics;
