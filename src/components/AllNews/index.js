import React, { useEffect, useState } from "react";
import { Wrapper, Content } from "./AllNews.styles";

import Photo from "../../assets/img-2.jpeg";
import Spinner from "../Spinner";

// const temp =
//   "https://newsapi.org/v2/everything?q=nigeria&from=2023-05-19&to=2023-05-19&sortBy=popularity&apiKey=2f1de88abc15435a9d26cb175a34a7e7";

// const url = "https://newsapi.org/v2/everything?q=nigeria";

const todaysDate = new Date();
const year = todaysDate.getFullYear();
const month = todaysDate.getMonth() + 1;
const day = todaysDate.getDate();
const todaysDateFormated = [year, month, day].join("-");
console.log(todaysDateFormated);

const mainUrl =
  "https://newsapi.org/v2/everything?q=nigeria&pageSize=24&apiKey=2f1de88abc15435a9d26cb175a34a7e7";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(mainUrl);
      const data = await response.json();
      setData(data.articles);
      setLoading(false);
    };
    getNews();
  }, []);

  const sortNews = async (value) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=nigeria&pageSize=24&sortBy=${value}&pageSize=20&apiKey=2f1de88abc15435a9d26cb175a34a7e7`
    );
    const data = await response.json();
    setData([...data.articles]);
    setLoading(false);
  };

  // const next = async () => {};
  // const previous = async () => {};

  return (
    <Wrapper>
      <div className="container">
        <button
          className="container-btn right"
          onClick={() => sortNews("relevancy")}
        >
          relevancy
        </button>
        <button
          className="container-btn right"
          onClick={() => sortNews("popularity")}
        >
          popularity
        </button>
        <button
          className="container-btn"
          onClick={() => sortNews("publishedAt")}
        >
          Latest
        </button>
      </div>
      <Content>
        {loading && <Spinner />}
        <main className="grid">
          {data &&
            data.length > 0 &&
            data.map((item, index) => {
              const {
                source: { name },
                author,
                title,
                url,
                urlToImage,
                publishedAt,
              } = item;

              const newObject = new Date(publishedAt);
              const hourFormated = newObject.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              });

              return (
                <div className="Premium__box">
                  <div className="Premium__img--box">
                    <div className="Premium__img--circle">
                      <p>{index + 1}</p>
                    </div>
                    <img
                      src={urlToImage || Photo}
                      alt="imageurl"
                      className="Premium__img"
                    />
                  </div>
                  <div className="Premium__content">
                    <div className="Premium__time">
                      <p className="grey creator">
                        {author && author > 0 && author.length > 25
                          ? author.slice(0, 20)
                          : name}
                      </p>
                      <p className="blue-grey">{hourFormated || "9.00 pm"}</p>
                    </div>
                    <div>
                      <p className="Premium__time-txt">
                        <a href={url}>
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
      </Content>
      {/* <div className="pagination-btn">
        <button className="pagination-btn__prev" disabled={true}>
          PREV
        </button>
        <button className="pagination-btn__prev" disabled={true}>
          NEXT
        </button>
      </div> */}
    </Wrapper>
  );
};

export default Index;
