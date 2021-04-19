import React, {useState} from "react";

export default function PostForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const [charCounter, setCharCounter] = useState(0);


  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

    // Clear the input field
    setBody("");
    setCharCounter(0);
  };

  const handleChange = e => {
    setBody(e.target.value)
    setCharCounter(body.length)
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">What's on your mind?</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              value={body}
              onChange={handleChange}
              maxLength= "255"
            />
          </div>

          <div className="form-group">
            <small className="float-right">{charCounter}/255</small>
            <button className="btn btn-primary " onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
