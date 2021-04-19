import React from "react";
import { useRecoilValue } from "recoil";
import { postState } from "../../state/state";
import EditPostForm from "./EditPostForm";

export default function EditPostPage({ id }) {
	const posts = useRecoilValue(postState);

	const postToEdit = posts.find(post => post.id == id);
	return (
		<div>
			<EditPostForm item={postToEdit} />
		</div>
	);
}
