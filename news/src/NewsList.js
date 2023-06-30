import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "../node_modules/axios/index";
import styled from "styled-components";

const NewsListBlock = styled.div`
  width: 920px;
  margin: 0 auto;
`;

const LoadingBlock = styled.div`
  width: 920px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

function NewsList({ category }) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const respons = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e998577ca9cf44f2ae169e7ae5832458`);
        setArticles(respons.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(true);
    };
    fetchData();
  }, [category]);

  if (!loading) {
    return <LoadingBlock>로딩중...</LoadingBlock>;
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
