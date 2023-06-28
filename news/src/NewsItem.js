import styled from "styled-components";
import axios from "../node_modules/axios/index";

const NewsItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2.5rem;

  .thumbnail {
    margin-right: 1rem;
  }
  .thumbnail img {
    display: block;
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
  .contents {
  }
  .contents h2 {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    wihte-space: normal;
  }
  .contents h2 a {
    color: black;
    text-decoration: none;
  }
  .contents p {
    line-height: 1.5;
    margin-top: 0.5rem;
    wihte-space: normal;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;

  const onError = (e) => {
    e.target.src = "https://placehold.co/160x160?text=NO+IMAGE";
  };

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} onError={onError} alt={title} />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
}

export default NewsItem;
