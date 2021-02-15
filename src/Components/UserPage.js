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
    const articlesByUser = this.state.articlesByUser;
    console.log(this.state);
    return (
      <div>
        {profile ? (
          <div className="profiles">
            <div className="about-div">
              <img src={profile.image} />
              <h3>{profile.username}</h3>
              <p>{profile.bio}</p>
              <button className="follow">Follow {profile.username}</button>
            </div>
            <div className="user-article">
              <h2>My articles</h2>
              {articlesByUser
                ? articlesByUser.map((article) => {
                    return (
                      <div className="article-more ">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <Link>Read more ...</Link>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default UserPage;
