import React from "react";
import DateTime from "../../components/DateTime";
import { Link } from "react-router-dom";
import ProfilePicture from "../../assests/images/profile-picture.png";

export default function FullPostCard ({ information }) {
    return(
    <div className="card mt-3">
    <div className="card-body">
      <img className="img-fluid" src={ProfilePicture} alt="a couch logo" />
      <p>{information.author} <DateTime dateString={information.dateCreated}/></p> 
      <p>{information.body}</p>
        <Link to={`/posts/${information.id}`}>
          <button className="btn btn-primary">
            Edit
          </button>
        </Link>
    </div>
    </div>
    )
}