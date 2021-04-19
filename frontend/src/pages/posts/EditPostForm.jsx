import React, { useState } from "react";
import PostsApi from "../../api/PostsApi";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { postState } from "../../state/state";

export default function EditPostForm({ item }) {
  const [body, setBody] = useState(item ? item.body : "");
  const [posts, setPosts] = useRecoilState(postState);

  const history = useHistory();

  async function updatePost(postData) {
    try {
      await PostsApi.updatePost(postData);
      const newPosts = posts.map((post) => {
        if (post.id !== item.id) {
          return post;
        }
        return postData;
      });
      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  const handleSubmit = () => {
    updatePost({ ...item, body });
    history.push(`/posts`);
    //	window.location.reload();
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
              onChange={(e) => setBody(e.target.value)}
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
