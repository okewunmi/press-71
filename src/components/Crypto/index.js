import React, { useState, useEffect } from "react";
import { Wrapper, Content } from "./crypto.styles.js";
// import Card from "./card";
// import { useFetch } from "./useFetch";
import Spinner from "../Spinner";
import photo4 from "../../assets/img-5.jpg";
// import articles from "../../data.js";

const url =
  "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=cryptocurrency&language=en";

const Crypto = () => {
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
      setNextPage(data.nextPage);
      setLoading(false);
    };
    getNews();
  }, []);

  const loadMore = async () => {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=cryptocurrency&language=en&page=${nextPage}`
    );
    const data = await response.json();
    setData([...data.results, ...data.results]);
    setNextPage(data.nextPage);
    setLoading(false);
  };

  return (
    <Wrapper>
      <div className="heading">
        <h2 className="heading--txt">Crypto News</h2>
        <hr className="underline"></hr>
      </div>
      <Content>
        {loading && <Spinner />}
        <main className="grid">
          {data &&
            data.length > 0 &&
            data.map((news, index) => {
              const { link, pubDate, title, image_url, creator } = news;

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
                        {creator && creator > 0 && creator.length > 16
                          ? creator.slice(0, 16)
                          : creator}
                      </p>
                      <p className="blue-grey">{hourFormated || "9.00 pm"}</p>
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
        </main>

        <div className="btn-box">
          {nextPage && (
            <button onClick={loadMore} className="page-btn">
              Load More
            </button>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};
export default Crypto;
