import React, { useState } from "react";

function Post(props) {
  // const [input, setInput] = useState(inputs);

  // const inputs = {
  //   title: "",
  //   image: "",
  //   description: "",
  // }

  // const updateField = (e) => {
  //   e.persist();
  //   setInput( prevInputs => ({...prevInputs, [e.target.name]: e.target.value }));
  // }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //     props.onPost(input);
  //     setInput(inputs);
  // }

  return (
    <div className="create-post-form">
      <form id="postform" /*onSubmit={onSubmit}*/>
        <input
          type="text"
          placeholder="Post Title"
          name="title"
          autoComplete="off"
          value="" /*{input.title}*/ /*onChange={updateField}*/
        />

        <input
          type="URL"
          placeholder="Image URL"
          name="image"
          autoComplete="off"
          value="" /*{input.image}*/ /*onChange={updateField}*/
        />

        <textarea
          form="postform"
          placeholder="Description"
          name="description"
          autoComplete="off"
          value="" /*{input.description}*/ /*onChange={updateField}*/
        />

        <input type="submit" value="POST" />

      </form>
    </div>
  );
}

export default Post;
