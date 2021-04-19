import React, {useState} from "react";

export default function CommentForm({ onSubmit }) {
  const [body, setBody] = useState("");
  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({body});

    // Clear the input field
    setBody("");
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Discussion</h4>
        <div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Enter your comment"
              name="body"
              value={body}
              onChange={(e) => setBody([e.target.name]=e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
