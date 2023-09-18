import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } =  props;
    return(
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
          <span className="badge rounded-pill bg-success">{source}</span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://variety.com/wp-content/uploads/2023/08/blue-4.jpg?w=1000&h=562&crop=1"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
        <div className= {`card-body  ${props.mode === 'ligh' ? 'bg-black text-light' : 'bg-white text-dark'} `} >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a 
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="d-grid gap-2 col-6 mx-auto btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
