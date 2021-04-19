import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function CommentForm({ id, onSubmit }) {
  const [body, setBody] = useState("");

  const handleSubmit = () => {
  
    // Invoke the passed in event callback
    onSubmit(id, body);

    // Clear the input field
    setBody("");
  };

  const handleChange = e => {
    setBody(e.target.value);
    console.log(body)
  }

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
              onChange={handleChange}
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
