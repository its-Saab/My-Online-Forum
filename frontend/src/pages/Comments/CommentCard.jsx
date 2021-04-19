import React from "react";
import { Link } from "react-router-dom";

export default function CommentCard({comment, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>

        <button className="btn btn-danger" onClick={onDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}