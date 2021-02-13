import React from "react";
import "../tags.css";
class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tagList: null };
  }
  componentDidMount() {
    fetch("https://mighty-oasis-08080.herokuapp.com/api/tags")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ tagList: data.tags });
      });
  }
  render() {
    const tagList = this.state.tagList;
    return (
      <div className="tags">
        {tagList
          ? tagList.map((tag) => {
              console.log(tag);
              return (
                <div>
                  <button>{tag}</button>
                </div>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

export default Tags;
