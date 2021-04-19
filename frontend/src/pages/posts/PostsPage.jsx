// NPM Packages
import React, {useEffect } from "react";
import { useRecoilState } from "recoil";
import { postState } from "../../state/state";

// Project files
import PostsApi from "../../api/PostsApi";
import Form from "./Form";
import Card from "./Card";


export default function PostsPage({user}) {

  // Global state
  const [posts, setPosts] = useRecoilState(postState);

  // Methods
  async function createPost(postData) {
    try {
      const response = await PostsApi.createPost(postData);
      const post = response.data;
      const newPosts = posts.concat(post);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  async function deletePost(post) {
    try {
      await PostsApi.deletePost(post.id);
      const newPosts = posts.filter((p) => p.id !== post.id);

      setPosts(newPosts);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    PostsApi.getAllPosts()
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  // Components
  const CardsArray = posts.map((post) => (
    <Card key={post.id} post={post} onDeleteClick={() => deletePost(post)} userInSession={user? user: ""} />
  ));

  return (
    <div>
      <Form onSubmit={(postData) => createPost(postData)} />
      {CardsArray}
      <br/>
    </div>
  );
}
