import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { postState } from "../../state/state";

import PostsApi from "../../api/PostsApi";
import EditPostForm from "./EditPostForm";

export default function EditPostPage({ id }) {
	const [posts, setPosts] = useRecoilState(postState);
	useEffect(() => {
		PostsApi.getPostById()
			.then(({ data }) => setPosts(data))
			.catch((err) => console.error(err));
	}, [setPosts]);

	let postToEdit = posts.find(post => post.id == id)
	return (
		<div>
			<EditPostForm key={posts.id} item={postToEdit} />
		</div>
	);
}
// onSubmit={(postData) => updatePost(postData)}
