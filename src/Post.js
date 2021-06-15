import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  let history = useHistory();
  let visibility = false;

  const inputs = {
    comment: "",
  };

  const [input, setInput] = useState(inputs);
  const [comments, setComments] = useState([]);

  const updateField = (e) => {
    e.persist();
    setInput((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setComments((prevComments) => ({ ...prevComments, input }));
    setInput(inputs);
    history.push("/");
  };

  let image;
  if (props.image == "") {
    image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png";
  } else {
    image = props.image;
  }

  return (
    <li className="post">
      <img src={image} alt="" />
      <div className="post-info">
        <div className="post-title">{props.title}</div>
        <div className="description">{props.description}</div>
        <ul className="comments">
          {comments.map((comment) => (
            <li>{comment}</li>
          ))}
        </ul>
        <form
          className="commentform"
          onSubmit={onSubmit}
          style={{display: "block"}}
        >
          <textarea
            form="commentform"
            placeholder="comment"
            name="comment"
            autoComplete="off"
            maxlength="1000"
            minLength="1"
            value={input.comment}
            onChange={updateField}
            required
            style={{display: "block"}
          <div className="submit-btn">
          <input type="submit" value="Comment" />
        </div>
        </form>
      </div>
    </li>
  );
};

export default Post;
