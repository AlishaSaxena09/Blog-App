import React from "react";
import { Link } from "react-router-dom";
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
      <div className="tags-section">
        <h2>
          <i class="fas fa-tags"></i>Popular Tags
        </h2>
        <div className="tags">
          {tagList
            ? tagList.map((tag) => {
                console.log(tag);
                return (
                  <div>
                    <Link to={`/tags/${tag}`}>
                      <button>
                        <i class="fas fa-tag"></i> {tag}
                      </button>
                    </Link>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    );
  }
}

export default Tags;
