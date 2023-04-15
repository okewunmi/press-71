import { useEffect, useState } from "react";
import paginate from "./utility";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2f1de88abc15435a9d26cb175a34a7e7";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getNews = async () => {
    const response = await fetch(url);
    const data = response.json();
    setData(paginate(data.articles));
    setLoading(false);
    console.log(data);
  };
  useEffect(() => {
    getNews();
  }, []);
  return { loading, data };
};
