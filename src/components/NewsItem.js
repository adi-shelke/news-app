import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,publishTime}=this.props; 
    return (
      <>
        <div className="card my-3">
          <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} className="card-img-top" alt="" style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text mb-2">
              {description}...
            </p>
            <p className="p-0 mb-2">{publishTime}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read Article
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
