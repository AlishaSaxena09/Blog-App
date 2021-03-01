import React from "react";
import { Redirect, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import Article from "./Articles";
import Home from "./Home";
import IndividualArticle from "./IndividualArticle";
import Footer from "./Footer";
import UserPage from "./UserPage";
import Editor from "./Editor";
import PrivateNavigation from "./PrivateNavigation";
import Setting from "./Setting";
import TagFeed from "./TagFeed";
import Loader from "./Loader";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
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
          this.setState({ user: data.user, loading: false });
        });

      console.log("token exists");
    } else {
      this.setState({ loading: false });
    }
  }
  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { loading, user } = this.state;
    return (
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <>
            {user ? (
              <>
                <PrivateNavigation
                  user={this.state.user}
                  setUser={this.setUser}
                />
                <Route
                  exact
                  path="/editor"
                  component={(props) => (
                    <Editor {...props} user={this.state.user} />
                  )}
                />
                <Route
                  exact
                  path="/editor/:articleSlug"
                  component={(props) => (
                    <Editor {...props} user={this.state.user} />
                  )}
                />
                <Route path="/settings" component={Setting} />
                <Route path="/signin">
                  <Redirect to="/" />
                </Route>
                <Route path="/signup">
                  <Redirect to="/" />
                </Route>
              </>
            ) : (
              <>
                <Header />
                <Route
                  path="/signin"
                  component={(props) => (
                    <SignIn {...props} setUser={this.setUser} />
                  )}
                />
                <Route
                  path="/signup"
                  component={(props) => (
                    <SignUp {...props} setUser={this.setUser} />
                  )}
                />
              </>
            )}
            <Route
              path="/"
              exact
              component={(props) => <Home {...props} user={this.state.user} />}
            />
            <Route
              path="/articles/:slug"
              component={(props) => (
                <IndividualArticle {...props} user={this.state.user} />
              )}
            />
            <Route
              path="/profiles/:username"
              component={(props) => (
                <UserPage {...props} user={this.state.user} />
              )}
            />
            <Route path="/tags/:tagName" component={TagFeed} />
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
