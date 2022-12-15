import React from "react";

const NewsItem = (props) =>{
    let {title,description,imageUrl,newsUrl,publishTime}=props; 
    return (
      <>
        <div className="card my-3" style={{width:"18rem"}}>
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="Cover Photo" style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text mb-2">
              {description}...
            </p>
            <p className="p-0 mb-2">{publishTime}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read Article
            </a>
          </div>
        </div>
      </>
    );
}

export default NewsItem;
