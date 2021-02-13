import React from "react";
import Articles from "./Articles";
import Main from "./Main";
import Tags from "./Tags";
import "../home.css";
function Home() {
  return (
    <div>
      <Main />
      <div className="global">
        <Articles />
        <Tags />
      </div>
    </div>
  );
}

export default Home;
