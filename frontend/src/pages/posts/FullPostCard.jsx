import React from "react";

import { useHistory } from "react-router-dom";
import ProfilePicture from "../../assests/images/profile-picture.png";
import ReactTimeAgo from 'react-time-ago'

export default function FullPostCard({ information, user }) {
	const history = useHistory();

	const handleEditButton = (e) => {
		e.preventDefault();
		history.push(`/posts/${information.id}/edit`);
	};
	return (
		<div className="card mt-3">
			<div className="card-body">
				<img className="img-fluid" src={ProfilePicture} alt="a couch logo" />
				<p>{information.body}</p>
				<hr/>
				<small>{information.author}</small>
				<small className="float-right">
					last updated <ReactTimeAgo date={information.lastUpdated} locale="en-US" />
				</small>
				<br/>
				{information.author == user && (
					<button onClick={handleEditButton} className="btn btn-primary">
						Edit
					</button>
				)}
			</div>
		</div>
	);
}
