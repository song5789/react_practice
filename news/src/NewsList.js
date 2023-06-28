import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "../node_modules/axios/index";
import styled from "styled-components";

const NewsListBlock = styled.div`
  width: 920px;
  margin: 0 auto;
`;

function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const respons = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=e998577ca9cf44f2ae169e7ae5832458");
        setArticles(respons.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(true);
    };
    fetchData();
  }, []);

  if (!loading) {
    return "로딩 중....";
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article, index) => {
        return <NewsItem article={article} key={index} />;
      })}
    </NewsListBlock>
  );
}

export default NewsList;
