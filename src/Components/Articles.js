import React from "react";
import "../article.css";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: null };
  }
  componentDidMount() {
    fetch("https://mighty-oasis-08080.herokuapp.com/api/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ articles: data.articles });
      });
  }
  render() {
    const articles = this.state.articles;
    return (
      <div className="articles">
        <h4>
          <Link to="">Global Feed</Link>
        </h4>
        {articles
          ? articles.map((article) => {
              console.log(article);
              return (
                <div className="global-feed">
                  <div className="article-desc">
                    <div className="img">
                      <Link to={`/profiles/${article.author.username}`}>
                        <img alt="user image" src={article.author.image} />
                      </Link>
                    </div>
                    <div>
                      <h3>
                        <Link>{article.author.username}</Link>
                      </h3>
                      <date>{new Date(article.createdAt).toDateString()}</date>
                    </div>
                  </div>
                  <div className="article-more">
                    <h3>
                      <Link to={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p>{article.description}</p>
                    <Link to={`/articles/${article.slug}`}>Read more ... </Link>
                  </div>
                </div>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

export default Articles;
