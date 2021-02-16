import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Article from "./Articles";
import Home from "./Home";
import IndividualArticle from "./IndividualArticle";
import Footer from "./Footer";
import UserPage from "./UserPage";
import Editor from "./Editor";
import PrivateNavigation from "./PrivateNavigation";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      fetch("https://mighty-oasis-08080.herokuapp.com/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      console.log("token exists");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/articles/:slug" component={IndividualArticle} />
        <Route path="/profiles/:username" component={UserPage} />
        <Route path="/editor" component={Editor} />
        {/* <Route path="/private" component={PrivateNavigation} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
