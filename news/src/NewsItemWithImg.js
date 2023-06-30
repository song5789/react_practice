function NewsItemWithImg({ url, title, onError, urlToImage }) {
  return (
    <>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={urlToImage} onError={onError} alt={title} />
        </a>
      </div>
    </>
  );
}

export default NewsItemWithImg;
