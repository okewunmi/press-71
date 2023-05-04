import React, { useState, useEffect } from "react";
import { Card, Wrapper } from "./Politics.styles";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AiOutlineComment,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";
import photo1 from "../../assets/img-4.jpg";
import Spinner from "../Spinner";
const Politics = () => {
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=politics";

  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
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
    setLoading(false);
  };
  const handleLike = (e) => {};

  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">Politics</h2>
        <hr className="underline"></hr>
        <div className="btn-box">
          View more
          <button className="btn-box--cicle btn-box__white" onClick={loadMore}>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
      {loading && <Spinner />}
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
              <main className="politic__box" key={index}>
                <div className="politic__box__img">
                  <img
                    src={image_url || photo1}
                    alt="name"
                    className="politic__box--img"
                  />
                  <figure className="politic__box--txt">
                    <p className="politic__box--name">{creator[0]}</p>
                    <p className="politic__box--time">{formatedDate}</p>
                  </figure>
                </div>
                <p className="politic__box--paragraph">
                  <a href={link}>
                    {title ? title.slice(0, 60).concat("....") : title}
                  </a>
                </p>
                <div className="politic__box--comment">
                  <div className="icon__like">
                    <button onClick={handleLike}>
                      <AiOutlineLike />
                    </button>
                  </div>
                  <div className="icon__dislike">
                    <button>
                      <AiOutlineDislike />
                    </button>
                  </div>
                  <div className="icon">
                    <button>
                      <AiOutlineComment />
                    </button>
                  </div>
                </div>
              </main>
            );
          })}
      </Card>
    </Wrapper>
  );
};

export default Politics;
