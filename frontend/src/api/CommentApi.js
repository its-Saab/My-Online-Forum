import Api from "./Api";

class CommentApi {
    listPostComments(postId) {
        return Api.get(`/posts/${postId}/comments`);
    }

    getCommentById(id) {
        return Api.get('/posts/'+id);
    }

    createComment(postId, commentData) {
        return Api.post(`/posts/${postId}/comments`, commentData);
    }

    updateComment(commentData) {
        return Api.put(`/comments/${commentData.commentId}`,{"body":commentData.body});
    }

    deleteComment(commentId) {
        return Api.delete(`/comments/${commentId}`);
    }
}

export default new CommentApi();
