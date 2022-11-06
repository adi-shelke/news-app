import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:"general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }
 
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09d7a6962b2f486d99781b8d1263661c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    data = await data.json()
    this.setState({
      articles:data.articles,
      totalResults:data.totalResults,
      loading:false
    }
  )
  }
  nextPage=async()=> {
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09d7a6962b2f486d99781b8d1263661c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      data = await data.json()
      this.setState({articles:data.articles})
      this.setState({
        page:(this.state.page)+1,
        articles:data.articles,
        loading:false
      }
      )
    }
  }
  prevPage=async()=> {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=09d7a6962b2f486d99781b8d1263661c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    data = await data.json()
    this.setState({articles:data.articles})
    this.setState({
      page:(this.state.page)-1,
      articles:data.articles,
      loading:false
    }
  )
}


  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">Top headlines of today</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title?element.title.slice(0,45):""}
                    description={element.description?element.description.slice(0,88):""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishTime={element.publishedAt.substring(0,element.publishedAt.indexOf('T'))}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">

          <button className="btn btn-dark" onClick={this.prevPage} disabled={this.state.page<=1}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark mx-2"onClick={this.nextPage}>Next &rarr;</button>
          </div>
        </div>
      </>
    );
  }
}
