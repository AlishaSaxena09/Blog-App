import React from "react";
import { Link } from "react-router-dom";
import "../UserPage.css";
class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null, articlesByUser: null };
  }
  componentDidMount() {
    // console.log();
    fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/profiles/${this.props.match.params.username}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ profile: data.profile });
      });
    fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles?author=${this.props.match.params.username}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ articlesByUser: data.articles });
      });
  }

  render() {
    const profile = this.state.profile;
    const currentUser = this.props.user;
    const articlesByUser = this.state.articlesByUser;
    console.log(this.state);
    return (
      <div>
        {profile ? (
          <div className="profiles">
            <div className="about-div">
              <div className="about-profile container">
                <div className="profile-image">
                  <img src={profile.image} />
                </div>
                <div className="profile-description">
                  <h3>{profile.username}</h3>
                  <p>{profile.bio}</p>
                  {currentUser && currentUser.username === profile.username ? (
                    <button className="follow">Edit profile Settings</button>
                  ) : (
                    <button className="follow">
                      <i class="fas fa-plus"></i>
                      Follow {profile.username}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="user-article">
              <div className="frosted-effect">
                <div className="container">
                  <h2>
                    My articles <i class="fas fa-feather-alt"></i>
                  </h2>
                  <div className="articleByUser">
                    {articlesByUser
                      ? articlesByUser.map((article) => {
                          return (
                            <div className="article-more ">
                              <header>
                                <h3>{article.title}</h3>
                                <p>
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
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default UserPage;
