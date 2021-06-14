import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      description: "",
    };
  }

  updateField = (e) => {
    // e.persist();
    this.setState((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //     props.onPost(input);
  //     setInput(inputs);
  // }

  render() {
    return (
      <div className="create-post-form">
        <form id="postform" /*onSubmit={onSubmit}*/>
          <input
            type="text"
            placeholder="Post Title"
            name="title"
            autoComplete="off"
            value={this.state.title}
            onChange={this.updateField}
          />

          <input
            type="URL"
            placeholder="Image URL"
            name="image"
            autoComplete="off"
            value={this.state.image}
            onChange={this.updateField}
          />

          <textarea
            form="postform"
            placeholder="Description"
            name="description"
            autoComplete="off"
            value={this.state.description}
            onChange={this.updateField}
          />

          <div className="submit-btn"><input type="submit" value="POST" /></div>
        </form>
      </div>
    );
  }
}

export default Post;
