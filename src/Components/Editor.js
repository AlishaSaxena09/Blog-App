//Button and Border
import React from "react";
import "../Editor.css";
class Editor extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      articleSlug: props.match.params.articleSlug || null,
      isCreating: false,
      isUpdating: false,
      title: "",
      description: "",
      body: "",
      tags: "",
      errors: [],
    };
  }
  componentDidMount() {
    if (this.state.articleSlug) {
      fetch(
        `https://mighty-oasis-08080.herokuapp.com/api/articles/${this.state.articleSlug}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState({
            title: data.article.title,
            description: data.article.title,
            body: data.article.body,
            tags: data.article.tagList.join(" "),
          });
        });
    }
  }
  handleChange = (e, propertyName) => {
    this.setState({ [propertyName]: e.target.value });
  };

  validateForm = () => {
    const errors = [];

    if (this.state.title.length < 1) {
      errors.push(
        "Title can't be blank. Title is too short (minimum is 1 character)"
      );
    }

    if (this.state.body.length < 1) {
      errors.push("Body can't be empty.");
    }

    if (this.state.description.length < 1) {
      errors.push(
        "Description can't be blank. Description is too short (minimum is 1 character)"
      );
    }
    this.setState({ errors });
    return !errors.length;
  };
  createArticle = () => {
    if (!this.validateForm()) return;

    this.setState({ isCreating: true });
    return fetch("https://mighty-oasis-08080.herokuapp.com/api/articles", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        article: {
          title: this.state.title,
          description: this.state.description,
          body: this.state.body,
          tagList: this.state.tags.split(" "),
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: Object.keys(data.errors).map((field) => {
              return field + " " + data.errors[field];
            }),
          });
          return;
        }
        this.setState({ isCreating: false });
        console.log(data);
        this.props.history.push(`/articles/${data.article.slug}`);
      });
  };

  updateArticle = () => {
    if (!this.validateForm()) return;

    this.setState({ isUpdating: true });
    return fetch(
      `https://mighty-oasis-08080.herokuapp.com/api/articles/${this.state.articleSlug}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          article: {
            title: this.state.title,
            description: this.state.description,
            body: this.state.body,
            tagList: this.state.tags.split(" "),
          },
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          this.setState({
            errors: Object.keys(data.errors).map((field) => {
              return field + " " + data.errors[field];
            }),
          });
          return;
        }
        this.setState({ isUpdating: false });
        console.log(data);
        this.props.history.push(`/articles/${data.article.slug}`);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.articleSlug) {
      this.updateArticle();
    }
    this.createArticle();
  };
  render() {
    return (
      <div className="editor-bg">
        <div className="editor container">
          {this.state.articleSlug ? (
            <h1>
              <i className="fas fa-edit"></i> Edit Article
            </h1>
          ) : (
            <h1>
              New Article <i class="fas fa-feather-alt"></i>
            </h1>
          )}
          <div>
            <ul className="form-error">
              {this.state.errors.map((error) => (
                <li>{error}</li>
              ))}
            </ul>
          </div>
          <div className="main-editor">
            <div className="editor-div-form">
              <div className="wave">
                <img src="./wave.svg" />
              </div>
              <div className="left-image">
                <img src="./editor-image.jpg" />
              </div>
              <form className="editor-form" onSubmit={this.handleSubmit}>
                <input
                  id="title"
                  value={this.state.title}
                  onChange={(e) => this.handleChange(e, "title")}
                  type="text"
                  placeholder="Article Title"
                />
                <input
                  value={this.state.description}
                  onChange={(e) => this.handleChange(e, "description")}
                  className="description-editor"
                  type="text"
                  placeholder="What's this article about?"
                />

                <textarea
                  value={this.state.body}
                  onChange={(e) => this.handleChange(e, "body")}
                  rows="10"
                  className="textarea-editor"
                  type="text"
                  placeholder="Write your article (in markdown)"
                ></textarea>

                <input
                  className="description"
                  type="text"
                  placeholder="Tags"
                  value={this.state.tags}
                  onChange={(e) => this.handleChange(e, "tags")}
                />
                {this.state.articleSlug ? (
                  <button disabled={this.state.isUpdating} className="publish">
                    <i class="fas fa-edit"></i>
                    {this.state.isUpdating ? "Updating..." : "Update Article"}
                  </button>
                ) : (
                  <button disabled={this.state.isCreating} className="publish">
                    <i class="fas fa-edit"></i>
                    {this.state.isCreating
                      ? "Publishing..."
                      : "Publish Article"}
                  </button>
                )}
              </form>
              <div className="right-image">
                <img src="./editor-image-2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Editor;
