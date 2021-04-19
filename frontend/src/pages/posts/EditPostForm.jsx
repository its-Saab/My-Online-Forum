import React, { useState, useEffect } from "react";
import { postState } from "../../state/state";
import PostsApi from "../../api/PostsApi";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

export default function EditPostForm({ item }) {
	const [body, setBody] = useState(item? item.body:"");
  const [posts, setPosts] = useRecoilState(postState);


	const history = useHistory();

	async function updatePost(postData) {
		try {
			const response = await PostsApi.updatePost(postData);
			const post = response.data;
			const newPosts = posts.concat(post);

			setPosts(newPosts);
		} catch (e) {
			console.error(e);
		}
	}


	const handleSubmit = () => {
		updatePost({...item, body});
		history.push(`/posts`);
	};

	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">Edit your Post</h4>
				<div>
					<div className="form-group">
						<textarea
							className="form-control"
              name="body"
							value={body}
							onChange={e => setBody(e.target.value)}
						/>
					</div>

					<div className="form-group">
						<button onClick={handleSubmit} className="btn btn-primary">
							Save
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
