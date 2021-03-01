import React from "react";
import Main from "./Main";
import Tags from "./Tags";
import "../home.css";
import IndividualArticle from "./IndividualArticle";
import UserPage from "./UserPage";
import GlobalFeed from "./GlobalFeed";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.user ? null : <Main />}
        <div className="global">
          <GlobalFeed />
          <Tags />
        </div>
      </div>
    );
  }
}

export default Home;
