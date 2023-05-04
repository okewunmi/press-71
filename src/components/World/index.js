import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./World.styles";
import { TbPointFilled } from "react-icons/tb";
import Spinner from "../Spinner";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import photo4 from "../../assets/img-5.jpg";
import photo1 from "../../assets/img-4.jpg";
const url =
  "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=world";

const World = () => {
  const [news, setNews] = useState([]);
  const [nextPage, setNextPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCrypto = async () => {
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
    getCrypto();
  }, []);
  const nextNews = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };
  const prevNews = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    });
  };
  // const half = Math.ceil(news.results.length / 2);
  const firstHalf = news.slice(0, 5);
  const secondHalf = news.slice(5, 10);

  const loadMore = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng&category=world&page=${nextPage}`
    );
    const data = await response.json();
    setNews([...data.results, ...data.results]);
    setNextPage(data.nextPage);
    setLoading(false);
  };

  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">World News</h2>
        <hr className="underline"></hr>
        <div className="btn-box">
          View more
          <button className="btn-box--cicle btn-box__white" onClick={loadMore}>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>

      <Content>
        <div className="left">
          {/* {loading && <Spinner />} */}
          {firstHalf &&
            firstHalf.length > 0 &&
            firstHalf.map((items, index) => {
              const { link, pubDate, title, creator } = items;
              const newObject = new Date(pubDate);
              const hourFormated = newObject.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });

              return (
                <div className="text" key={index}>
                  <div className="left-head">
                    <TbPointFilled className="left-icon" />
                    <p className="left-text">hot topic</p>
                  </div>
                  <div className="left-txt">
                    <a target="_blank" rel="noopener noreferrer" href={link}>
                      <p className="left-txt--head">{title}</p>
                    </a>
                  </div>
                  <div className="left-time">
                    <p className="minute">{hourFormated}</p>
                    <p>
                      by: <span className="blue-grey">{creator}</span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="center">
          <div className="center__btn">
            <button className="btn--arrow" disabled={true} onClick={prevNews}>
              <HiArrowNarrowLeft />
            </button>
            <button className="btn--arrow" disabled={true} onClick={nextNews}>
              <HiArrowNarrowRight />
            </button>
          </div>
          <div className="center__text">
            <div className="center__text--box">
              <p>World News</p>
            </div>
            <a href="w" className="center__text--link">
              <p>
                {
                  "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders"
                }
              </p>
            </a>
          </div>
        </div>

        <div className="right">
          {(secondHalf &&
            secondHalf.length > 0 &&
            secondHalf.map((items, index) => {
              const { link, pubDate, title, creator, image_url } = items;
              const newObject = new Date(pubDate);
              const hourFormated = newObject.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });

              return (
                <div className="Premium__box" key={index}>
                  <div className="Premium__img--box">
                    <div className="Premium__img--circle">
                      <p>{index + 1}</p>
                    </div>
                    <img
                      src={image_url || photo4}
                      alt="imageurl"
                      className="Premium__img"
                    />
                  </div>
                  <div className="Premium__content">
                    <div className="Premium__time">
                      <p className="grey creator">
                        {creator && creator > 0 && creator.length > 20
                          ? creator.slice(0, 25)
                          : creator}
                      </p>
                      <p className="blue-grey">{hourFormated || "9.00 pm"}</p>
                    </div>
                    <div>
                      <p className="Premium__time-txt">
                        <a href={link}>
                          {title
                            ? title.slice(0, 200).concat("....")
                            : "North Korea Is Now Mining Crypto to Launder Its Stolen Loot"}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })) || (
            <div className="Premium__box">
              <div className="Premium__img--box">
                <div className="Premium__img--circle">
                  <p>12</p>
                </div>
                <img src={photo1} alt="imageurl" className="Premium__img" />
              </div>
              <div className="Premium__content">
                <div className="Premium__time">
                  <p className="grey creator">Google News</p>
                  <p className="blue-grey">9.00 pm</p>
                </div>
                <div>
                  <p className="Premium__time-txt">
                    <a href="w">
                      Google's Pixel 7 and 7 Pro’s design gets revealed even
                      more with fresh crisp renders
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default World;
