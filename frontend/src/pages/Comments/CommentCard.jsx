import React from "react";
import { Link } from "react-router-dom";

export default function CommentCard({ comment, onCommentClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>

        <Link to={`/posts/${comment.id}`}>
          <button className="btn btn-danger" onClick={onCommentClick}>Create</button>
        </Link>


        <button className="btn btn-danger" onClick={onCommentClick}>
          Delete
        </button>
      </div>
    </div>
  );
}