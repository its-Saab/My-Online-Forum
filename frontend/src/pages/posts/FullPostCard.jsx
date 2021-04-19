import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function FullPostCard({ information }) {
	const history = useHistory();

	const handleEditButton = (e) => {
		e.preventDefault();
		history.push(`/posts/${information.id}/edit`);
	};
	return (
		<div className="card mt-3">
			<div className="card-body">
				<p>{information.author}</p>
				<p>{information.body}</p>
				<button onClick={handleEditButton} className="btn btn-primary">Edit</button>
			</div>
		</div>
	);
}
