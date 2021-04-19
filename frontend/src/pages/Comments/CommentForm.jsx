import React from "react";
import { Link } from "react-router-dom";

export default function CommentForm({ post, onSubmit }) {
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    // Invoke the passed in event callback
    onSubmit({ body: body });

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
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          
            <button className="btn btn-primary" onClick={handleSubmit}>
              Comment
            </button>
            
          </div>

        </div>
      </div>
    
  );
}
