import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Article from "./Articles";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
