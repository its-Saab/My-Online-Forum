import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago';
import ProfilePicture from "../../assests/images/profile-picture.png";


export default function PostCard({ post, onDeleteClick, userInSession = "" }) {

  return (
    <div className="card mt-3">
      <div className="card-body">
        <img className="img-fluid" src={ProfilePicture} alt="a couch logo" />
        <p>{post.body}</p>
        <hr/>
        <div>
        <small>{post.author}</small>
        <small className="float-right">Posted <ReactTimeAgo date={new Date(post.dateCreated)} locale="en-US"/></small>
        </div>
        <br/>
        <div>
      {
         userInSession && post.author == userInSession &&
        <button className="btn btn-danger float-right" onClick={onDeleteClick}>
          Delete
        </button>
      }

        <Link to={`/posts/${post.id}`}>
          <button className="btn btn-primary ml-1">
            Read more
          </button>
        </Link>

        </div>

      </div>
    </div>
  );
}
