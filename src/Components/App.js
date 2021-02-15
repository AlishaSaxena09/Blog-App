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

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/articles/:slug" component={IndividualArticle} />
      <Route path="/profiles/:username" component={UserPage} />
      <Route path="/editor" component={Editor} />
      <Footer />
    </div>
  );
}

export default App;
