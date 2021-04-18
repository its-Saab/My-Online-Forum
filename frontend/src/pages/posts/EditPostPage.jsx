import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { postState } from "../../state/state";

import PostsApi from "../../api/PostsApi";
import EditPostForm from "./EditPostForm";

export default function EditPostPage() {

    const [posts, setPosts] = useRecoilState(postState);


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
useEffect(() => {
    PostsApi.getPostById()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, [setPosts]);



return (
    <div>
        <EditPostForm onSubmit={(postData) => updatePost(postData)} />
    </div>
)

}