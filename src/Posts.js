import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = (props) => {
  let history = useHistory();

  const inputs = {
    title: "",
    image: "",
    description: "",
  };

  const [input, setInput] = useState(inputs);

  const updateField = (e) => {
    e.persist();
    setInput((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    props.onCreatePost(input);
    setInput(inputs);
    history.push("/");
  };

  return (
    <div className="create-post-form">
      <form id="postform" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          name="title"
          autoComplete="off"
          value={input.title}
          onChange={updateField}
        />

        <input
          type="URL"
          placeholder="Image URL"
          name="image"
          autoComplete="off"
          value={input.image}
          onChange={updateField}
        />

        <textarea
          form="postform"
          placeholder="Description"
          name="description"
          autoComplete="off"
          value={input.description}
          onChange={updateField}
        />

        <div className="submit-btn">
          <input type="submit" value="POST" />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
