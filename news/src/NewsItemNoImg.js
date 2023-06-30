function NewsItemNoImg({ onError, title, url }) {
  return (
    <>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src="https://placehold.co/160x160?text=NO+IMAGE" onError={onError} alt={title} />
        </a>
      </div>
    </>
  );
}

export default NewsItemNoImg;
