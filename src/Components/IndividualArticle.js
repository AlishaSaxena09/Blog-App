import React from "react";
import { Link } from "react-router-dom";
import "../individualarticle.css";
class IndividualArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }
  componentDidMount() {
    console.log(this.props.match.params.slug);
    fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles/${this.props.match.params.slug}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ article: data.article });
      });
  }
  render() {
    const article = this.state.article;
    return (
      <div>
        {article ? (
          <div className="individual">
            <div className="about-article">
              <h1>{article.title}</h1>
              <div className="profile-div">
                <div className="img">
                  <img alt="user image" src={article.author.image} />
                </div>
                <div>
                  <h3>
                    <Link>{article.author.username}</Link>
                  </h3>
                  <date>{new Date(article.createdAt).toDateString()}</date>
                </div>
                <div>
                  <button className="button1">
                    Follow {article.author.username}
                  </button>
                  <button className="button2">Favorite Post </button>
                </div>
              </div>
            </div>
            <div className="article-introduction">
              <h4>{article.description}</h4>
              <p>{article.body}</p>
            </div>
            <div className="profile-about">
              <div className="profile-div">
                <div className="img">
                  <img alt="user image" src={article.author.image} />
                </div>
                <div>
                  <h3>
                    <Link>{article.author.username}</Link>
                  </h3>
                  <date>{new Date(article.createdAt).toDateString()}</date>
                </div>
                <div>
                  <button className="button3">
                    Follow {article.author.username}
                  </button>
                  <button className="button2">Favorite Post </button>
                </div>
              </div>
            </div>
            <div className="comment-section">
              <textarea placeholder="Write a comment..." rows="3"></textarea>
              <div className="textarea-button">
                <img alt="user-image" src={article.author.image} />
                <button>Post Comment</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default IndividualArticle;
