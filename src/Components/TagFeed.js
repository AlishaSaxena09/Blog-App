import React from "react";
import "../article.css";
import { Link } from "react-router-dom";
import Tags from "./Tags";

class TagFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tagName: props.match.params.tagName, articles: null };
  }
  componentDidMount() {
    fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles?tag=${this.state.tagName}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ articles: data.articles });
      });
  }
  render() {
    const articles = this.state.articles;
    return (
      <div className="global">
        <div className="articles">
          <Link to="/">
            <h4>Global Feed</h4>
          </Link>
          <Link to={`/tags/${this.state.tagName}`} className="active">
            <h4>#{this.state.tagName}</h4>
          </Link>
          <div className="feed">
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
                            <Link to={`/profiles/${article.author.username}`}>
                              {article.author.username}
                            </Link>
                          </h3>
                          <date>
                            {new Date(article.createdAt).toDateString()}
                          </date>
                        </div>
                      </div>
                      <div className="article-more">
                        <h3>
                          <Link to={`/articles/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        <p>{article.description}</p>
                        <Link to={`/articles/${article.slug}`}>
                          Read more ...{" "}
                        </Link>
                      </div>
                    </div>
                  );
                })
              : "Loading..."}
          </div>
        </div>
        <Tags />
      </div>
    );
  }
}

export default TagFeed;
