import React,{useEffect,useState,useCallback}from "react";
import NewsItem from "./NewsItem";
const spinner = require("../spinner.gif")
// let apiKey3 = "09d7a6962b2f486d99781b8d1263661c"
let apiKeyViit="39330e2d092e42a58619596870f7b499"
const News = (props) =>{
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const updatepage = useCallback(
    async(category) => {
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKeyViit}&page=${page}&pageSize=20`
    console.log(url)
    // this.setState({loading:true})
    setloading(true)
    let data = await fetch(url)
    data = await data.json()
    setarticles(data.articles)
    setloading(false)
    settotalResults(data.totalResults)
    },
    [page],
  )
  
  // const updatepage = async (page)=>
  // {
  //   let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=09d7a6962b2f486d99781b8d1263661c&page=${page}&pageSize=20`
  //   console.log(url)
  //   // this.setState({loading:true})
  //   setloading(true)
  //   let data = await fetch(url)
  //   data = await data.json()
  //   setarticles(data.articles)
  //   setloading(false)
  //   settotalResults(data.totalResults)
  // }
  useEffect(() => {
    document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)} - NewsApp`
    updatepage(props.category)
  },[props.category,updatepage,page])
  
const nextPage=async()=> {
    updatepage(page+1)
    setpage(page+1)
  }
const prevPage=async()=> {
    updatepage(page-1)
    setpage(page-1)
  }
    return (
      <>
        {loading?<img alt="spinner" className="rounded mx-auto d-block mt-6" style={{marginTop:"80px"}} src={spinner}></img>:
        <div className="container my-3">
          <h2 className="text-center" style={{marginTop:"80px"}}> Top {props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines</h2>
          <div className="row">
            {articles.map((element) => {
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
          <button className="btn btn-success" onClick={prevPage} disabled={page<=1}>&larr; Previous</button>
          <button id="nxtBtn" className="btn btn-success mx-2"onClick={nextPage} disabled={(page+1>Math.ceil(totalResults/20))}>Next &rarr;</button>
          </div>
        </div>
        }
      </>
    );
  }
// News.defaultProps = {
//   category: "general",
//   country: "in",
// };
export default News