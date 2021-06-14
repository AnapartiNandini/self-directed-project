import React from "react";

class Post extends React.Component {
  render() {
    return (
      <li className="post">
        <img src={this.props.image} alt="" />
        <div className="post-info">
          <div className="post-title">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </li>
    );
  }
}

export default Post;
