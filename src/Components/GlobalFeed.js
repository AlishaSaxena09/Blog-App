import React from "react";
import "../article.css";
import { Link } from "react-router-dom";

class GlobalFeed extends React.Component {
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
        <Link to="/" className="active">
          <h4 className="feed-button">Global Feed</h4>
        </Link>
        <div className="feed">
          {articles
            ? articles.map((article) => {
                console.log(article);
                return (
                  <div className="article-more full-width container">
                    <header>
                      <div className="article-author-details">
                        <div className="img">
                          <Link to={`/profiles/${article.author.username}`}>
                            <img alt="user image" src={article.author.image} />
                          </Link>
                        </div>
                        <div>
                          <h3 className="name">
                            <Link to={`/profiles/${article.author.username}`}>
                              {article.author.username}
                            </Link>
                          </h3>
                          <date>
                            {new Date(article.createdAt).toDateString()}
                          </date>
                        </div>
                      </div>
                      <h3 className="article-title">{article.title}</h3>
                      <p className="article-description">
                        {article.description.length > 120
                          ? article.description.slice(0, 120) + "..."
                          : article.description}
                      </p>
                    </header>
                    <footer className="read-more-container">
                      <button className="like-button">
                        <i className="fas fa-heart"></i>{" "}
                        <span>{article.favoritesCount}</span>
                      </button>
                      <Link
                        className="read-more"
                        to={`/articles/${article.slug}`}
                      >
                        Read more ...
                      </Link>
                    </footer>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    );
  }
}

export default GlobalFeed;
