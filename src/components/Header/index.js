import React, { useState, useEffect } from "react";
import { Wrapper } from "./Header.styles";

import { MdOutlineLocationCity } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaCalendarAlt, FaNewspaper } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";
// import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import photo5 from "../../assets/preniun.jpg";
// import photo4 from "../../assets/img-2.jpeg";
// import photo1 from "../../assets/img-4.jpg";
import Spinner from "../Spinner";
//const Api_Key = "8hm6temfzaJ10LpoVS5fpArANkGmFBxOkE2zKbw9";
// const api_key = `?apikey=${process.env.REACT_APP_API_KEY}`;

// const API_ENDPOINT = "https://newsdata.io/api/1/news";

const tempUrl =
  "https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&country=ng";

const Header = () => {
  const [news, setNews] = useState(0);
  const [setButtonsValues] = useState([]);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const btnfetch = async (value) => {
    const reponse = await fetch(`${tempUrl}&category=${value}`);
    const data = await reponse.json();
    setNews(data.results[0]);
    setButtonsValues((prevValues) => [...prevValues, value]);
  };

  const searchBtn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reponse = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_190253e826e13c8df31ac656b1975f4e9e42a&q=${searchTerm}`
    );
    const data = await reponse.json();
    setSearch(data.results);
    setLoading(false);
    setSearchTerm("");
  };

  useEffect(() => {
    btnfetch();
    searchBtn();
  });

  const { creator, description, link, pubDate, title } = news;
  const dateString = pubDate;
  const newObject = new Date(dateString);
  const minute = newObject.getMinutes();
  const minuteFormated = minute.toString().padStart(2, "0");

  const newObject2 = new Date();
  const day = newObject2.getDay();
  const dayToDay = (day) => {
    if (day === 0) {
      return "sunday";
    } else if (day === 1) {
      return "monday";
    } else if (day === 2) {
      return "tuesday";
    } else if (day === 3) {
      return "wednesday";
    } else if (day === 4) {
      return "thursday";
    } else if (day === 5) {
      return "friday";
    } else if (day === 6) {
      return "saturday";
    }
  };
  return (
    <Wrapper>
      <div className="nav">
        <div className="weather ">
          <div className="right ">
            <MdOutlineLocationCity className="icon" />
            <p>lagos</p>
          </div>
          <div className="flex top">
            <TiWeatherPartlySunny className="icon" />
            <p>30 degree</p>
          </div>
        </div>
        <h2 className="logo">
          press<span>71</span>
        </h2>
        <div className="weather ">
          <div className="right ">
            <FaCalendarAlt className="icon" />
            <p>{dayToDay(day)}</p>
          </div>
          <div className="flex top ">
            <FaNewspaper className="icon" />
            <p>today magasize</p>
          </div>
        </div>
      </div>
      {/* nav butttons */}

      <nav className="nav-section">
        <div className="nav-btn has-scrollbar">
          <div>
            <button onClick={() => btnfetch("Business")}>Business</button>
          </div>
          <div>
            <button onClick={() => btnfetch("Entertainment")}>
              Entertainment
            </button>
          </div>
          <div>
            <button onClick={() => btnfetch("Health")}>Health</button>
          </div>
          <div>
            <button onClick={() => btnfetch("Politics")}>Politics</button>
          </div>
          <div>
            <button onClick={() => btnfetch("Science")}>Science</button>
          </div>
          <div>
            <button onClick={() => btnfetch("Sports")}>Sports</button>
          </div>
          <div>
            <button onClick={() => btnfetch("Technology")}>Technology</button>
          </div>
          <div>
            <button onClick={() => btnfetch("World")}>World</button>
          </div>
        </div>
        <div className="nav-search">
          <form>
            <button
              type="submit"
              onClick={searchBtn}
              className="nav-search-btn"
            >
              <BiSearch />
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-search"
            ></input>
          </form>
        </div>
      </nav>
      <div className="content">
        <div className="text">
          <div className="heading">
            <TbPointFilled className="display icon-2" />
            <p>trending now</p>
          </div>
          <div className="title">
            <p className="title__head">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                {title
                  ? title
                  : " NDLEA Intercepts Cannabis Concealed In Dried Onions At Lagos Airport"}
              </a>
            </p>

            <p className="title__txt">
              {description
                ? description.slice(0, 90).concat(" ...")
                : "The National Drug Law Enforcement Agency has intercepted 2.7kg of cannabis concealed...."}
            </p>
          </div>
          <div className="info">
            <div className="info__time">
              <TbPointFilled className="display icon-2" />
              <p>{pubDate ? minuteFormated : 30} Minutes Ago</p>
            </div>
            <div className="info__creator">
              <p>
                BY : <span>{creator ? creator : "Comfort Olusesi"}</span>
              </p>
            </div>
          </div>
          {/* <div className="content__btn">
            <button className="btn" onClick={Next}>
              <HiArrowNarrowRight className="btn-width" />
            </button>
            <button className="btn" onClick={Prev}>
              <HiArrowNarrowLeft />
            </button>
          </div> */}
        </div>
        <div className="Premium">
          {loading && <Spinner />}
          {search.length > 0 && (
            <div>
              <button className="clear__all" onClick={() => setSearch([])}>
                <p>Clear All</p>
              </button>
            </div>
          )}

          {search.map((items, index) => {
            const { link, pubDate, title, image_url } = items;
            const newObject = new Date(pubDate);
            const hourFormated = newObject.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });

            return (
              <section key={index}>
                <article className="Premium__box">
                  <div className="Premium__img--box">
                    <div className="Premium__img--circle">
                      <p>{index + 1}</p>
                    </div>
                    <img
                      src={image_url ? image_url : photo5}
                      alt="imageurl"
                      className="Premium__img"
                    />
                  </div>

                  <div className="Premium__content">
                    <div className="Premium__time">
                      <p className="blue-grey">recent post</p>
                      <p className="red">{hourFormated}</p>
                    </div>

                    <p className="Premium__time-txt">
                      <a target="_blank" rel="noopener noreferrer" href={link}>
                        {title
                          ? title
                          : "Osimhen names player he wants to emulate"}
                      </a>
                    </p>
                  </div>
                </article>
              </section>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
