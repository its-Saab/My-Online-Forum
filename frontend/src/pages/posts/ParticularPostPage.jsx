import React  from "react";
import { useRecoilValue } from "recoil";
import { postsStates } from "../../state/state";

export const ParticularPostPage = ({match}) => {
  // Local state
    const routerID = match.params.id;
    const posts = useRecoilValue(postsStates);
    const currentPost = posts.find((post) => post.id === parseInt(routerID));
  
    const {
      id: postId,
      dateCreated,
      lastUpdated,
      body: postContent,
      postCommentsList,
      author,
    } = currentPost;


 return (
   <>
     <p>Post Id: {postId}</p>
     <p>Date created: {dateCreated}</p>
     <p>Last updated: {lastUpdated}</p>
     <p>Content: {postContent}</p>
     <p>Author: {author}</p>
   </>
 );
};
