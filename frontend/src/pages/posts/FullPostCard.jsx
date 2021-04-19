import React from "react";

import { Link, useHistory } from "react-router-dom";
import ProfilePicture from "../../assests/images/profile-picture.png";
import DateTime from "../../components/DateTime";


export default function FullPostCard({ information }) {
	const history = useHistory();

	const handleEditButton = (e) => {
		e.preventDefault();
		history.push(`/posts/${information.id}/edit`);
	};
	return (
    <div className="card mt-3">
    <div className="card-body">
      <img className="img-fluid" src={ProfilePicture} alt="a couch logo" />
      <p>{information.author} <DateTime dateString={information.dateCreated}/></p>
      <p>{information.body}</p>
				<button onClick={handleEditButton} className="btn btn-primary">Edit</button>
			</div>
		</div>
	);
}
