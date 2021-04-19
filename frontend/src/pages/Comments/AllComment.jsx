// NPM Packages
import React, { useState, useEffect} from "react";


// Project files
import CommentApi from "../../api/CommentApi";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";

export default function AllComments({id, user}) {

  const [comments, setComments] = useState([]);

  // Methods
  async function createComment(commentData) {
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
    CommentApi.listPostComments(id)
      .then(({ data }) => setComments(data))
      .catch((err) => console.error(err));
  }, [setComments]);

  // Components
  const CardsArray = comments.map((comment) => (
    <CommentCard userInSession={user} key={comment.id} comment={comment} onDeleteClick={() => deleteComment(comment)} />
  ));

  return (
    <div>
      <h1>Comments</h1>
      {CardsArray}
      <CommentForm onSubmit={(commentData) => createComment(commentData)} />

    </div>
  );
}
