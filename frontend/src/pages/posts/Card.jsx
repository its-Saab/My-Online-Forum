import React from "react";
import { Link } from "react-router-dom";

import Date from "../../components/Date";
import ProfilePicture from "../../assests/images/profile-picture.png";


export default function PostCard({ post, onDeleteClick }) {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <img className="img-fluid" src={ProfilePicture} alt="a couch logo" />
        <p>{post.author}</p>
        <Date dateString={post.dateCreated}/>
        <p>{post.body}</p>

        <Link to={`/posts/${post.id}`}>
          <button className="btn btn-danger">View</button>
        </Link>

        <button className="btn btn-danger" onClick={onDeleteClick}>
          Delete
        </button>

        <Link to={`/posts/${post.id}`}>
          <button className="btn btn-primary">
            Read more
          </button>
        </Link>

      </div>
    </div>
  );
}
