import React from "react";

class Post extends React.Component {
  render() {
    let image;
    if(this.props.image == "") {
      image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"
    } else {
      image = this.props.image;
    }
    return (
      <li className="post">
        <img src={image} alt="" />
        <div className="post-info">
          <div className="post-title">{this.props.title}</div>
          <div className="description">{this.props.description}</div>
        </div>
      </li>
    );
  }
}

export default Post;
