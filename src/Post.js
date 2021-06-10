import React, { useState } from "react";

function Post(props) {

  const [input, setInput] = useState(inputs);

  const inputs = {
    title: "",
    image: "",
    description: "",
  }

  const updateField = (e) => {
    e.persist();
    setInput( prevInputs => ({...prevInputs, [e.target.name]: e.target.value }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
      props.onPost(input);
      setInput(inputs);
  }

  return (
    <form className="create-post-form" onSubmit={onSubmit}>

      <input placeholder="Post Title" name="title" value={input.title} onChange={updateField}/>

      <input placeholder="Image URL" name="image" value={input.image} onChange={updateField}/>

      <textarea placeholder="Description" name="description" value={input.description} onChange={updateField}/>

      <button className="creat-post-link" type="submit">
        Post
      </button>
    </form>
  );
}

export default Post;