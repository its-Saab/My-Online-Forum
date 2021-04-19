// NPM Packages
import React, { useEffect} from "react";
import {useRecoilState} from "recoil";
import {commentState} from "../../state/CommentState";

// Project files
import CommentApi from "../../api/CommentApi";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

export default function AllComments(post) {
  console.log("post id",post.post.id)
  // Local state
  const [comments, setComments] = useRecoilState(commentState);

  // Methods
  async function createComment( id,commentData) {
    try {
      const response = await CommentApi.createComment(id, commentData);
      const comment = response.data;
      const newComments = comments.concat(comment);

      setComments(newComments);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteComment(comment) {
    try {
      await CommentApi.deleteComment(comment.id);
      const newComments = comments.filter((c) => c.id !== comment.id);

      setComments(newComments);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    CommentApi.listPostComments()
      .then(({ data }) => setComments(data))
      .catch((err) => console.error(err));
  }, [setComments]);

  // Components
  const CardsArray = comments.map((comment) => (
    <CommentCard post={post.id} key={comment.id} comment={comment} onDeleteClick={() => deleteComment(comment)} />
  ));

  return (
    <div>
      <CommentForm id={post.post.id} onSubmit={(commentData) => createComment(commentData)} />

      {CardsArray}
    </div>
  );
}
