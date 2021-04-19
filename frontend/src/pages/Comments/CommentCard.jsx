import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago'

export default function CommentCard({ userInSession, comment, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <p>{comment.body}</p>
        <hr/>
        <small>by {comment.user}</small>
        <small className="float-right">
					 <ReactTimeAgo date={new Date(comment.dateCreated)} locale="en-US" />
				</small>
        <br/>
        {
          comment.user == userInSession &&
        <button className="btn btn-danger float-right" onClick={onDeleteClick}>
          Delete
        </button>
        }
      </div>
    </div>
  );
}
