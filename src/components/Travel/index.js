import React, { useState, useEffect } from "react";
import { Wrapper, Card } from "./Travel.styles";
import Spinner from "../Spinner";
import { HiArrowNarrowRight } from "react-icons/hi";

const url =
  "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=traveling&language=en&country=ng";
const Travel = () => {
  const [travelNews, setTravelNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setTravelNews(data.results);
      setPage(data.nextPage);
      setLoading(false);
    };
    getNews();
  }, []);

  const loadMore = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=traveling&language=en&country=ng&page=${page}`
    );
    const data = await response.json();
    setTravelNews([...data.results, ...data.results]);
    setPage(data.nextPage);
    setLoading(false);
  };
  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">Traveling</h2>
        <hr className="underline"></hr>
        <div className="btn-box hide">
          View more
          <button className="btn-box--cicle btn-box__white" onClick={loadMore}>
            <HiArrowNarrowRight />
          </button>
        </div>
      </div>
      <Card>
        {loading && <Spinner />}
        <main className="container">
          {travelNews &&
            travelNews.length > 0 &&
            travelNews.map((news, index) => {
              const { link, pubDate, title, creator, description } = news;

              const newObject = new Date(pubDate);
              const hourFormated = newObject.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });
              return (
                <div className="container-txt" key={index}>
                  <div className="container-txt--head">
                    <p className="author">{creator || "Jame Cameroon"}</p>
                    <p className="date">{hourFormated}</p>
                  </div>
                  <div className="container-txt--body">
                    <h3>
                      <a href={link}>{title}</a>
                    </h3>
                    <p>
                      {description
                        ? description.slice(0, 120).concat("....")
                        : ""}
                    </p>
                  </div>
                  <div className="btn-box">
                    <span className="white ">read more</span>
                    <button className="btn-box--cicle__black">
                      <HiArrowNarrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
        </main>
        {/* <div className="btn-box">
          <button onClick={loadMore} className="page-btn">
            View More <HiArrowNarrowRight />
          </button>
        </div> */}
        <div className="btn-box">
          View more
          <button className="btn-box--cicle btn-box__white" onClick={loadMore}>
            <HiArrowNarrowRight />
          </button>
        </div>
      </Card>
    </Wrapper>
  );
};

export default Travel;
