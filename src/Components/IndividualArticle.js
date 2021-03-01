import React from "react";
import { Link } from "react-router-dom";
import "../individualarticle.css";
class IndividualArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: null, isDeleting: false };
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
  deleteArticle = () => {
    this.setState({ isDeleting: true });
    return fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles/${this.props.match.params.slug}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    ).then((data) => {
      this.setState({ isDeleting: false });
      console.log(data);
      this.props.history.push(`/profiles/${this.props.user.username}`);
    });
  };
  render() {
    const article = this.state.article;
    const currentUser = this.props.user;

    return (
      <div className="">
        {article ? (
          <div className="individual">
            <div className="individual-article-section">
              <h1>{article.title}</h1>
              <h4>{article.description}</h4>
              <p>{article.body}</p>
              <div>
                <img src="../indi-article.svg" />
              </div>
            </div>
            <div className="individual-profile-section">
              <div className="individual-about-sec">
                <div className="individual-profile-image">
                  <img alt="user image" src={article.author.image} />
                </div>
                <div className="individual-profiles">
                  <h3>
                    <Link>{article.author.username}</Link>
                  </h3>
                  <date>{new Date(article.createdAt).toDateString()}</date>
                </div>
              </div>
              <div className="individual-button-section">
                {currentUser &&
                currentUser.username === article.author.username ? (
                  <i>
                    <Link to={`/editor/${article.slug}`}>
                      <button className="button1">
                        <i class="fas fa-edit"></i>
                        Edit Post
                      </button>
                    </Link>
                    <button className="button2" onClick={this.deleteArticle}>
                      <i class="fas fa-bin"></i>
                      {this.state.isDeleting ? "Deleting..." : "Delete Post"}
                    </button>
                  </i>
                ) : (
                  <>
                    <button className="button1">
                      <i class="fas fa-plus"></i>
                      Follow {article.author.username}
                    </button>
                    <button className="button2">
                      <i class="fas fa-heart"></i>Favorite Post{" "}
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="comment-section">
              <h3>Comment Box</h3>
              <div className="textarea-button">
                <div className="textarea-button-svg">
                  <img src="../comment.svg" />
                </div>
                <textarea placeholder="Leave a comment..." rows="4"></textarea>
              </div>
              <button className="post-comment">Post Comment</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default IndividualArticle;
