import Api from "./Api";

class CommentApi {
    listPostComments(postId) {
        return Api.get('/posts/{postId}/comments'+postId);
    }

    getCommentById(id) {
        return Api.get('/posts/'+id);
    }

    createComment(postId) {
        return Api.post('/posts/{postId/comments}', +postId);
    }

    updateComment(commentId) {
        return Api.put('/posts', +commentId);
    }

    deleteComment(commentId) {
        return Api.delete('/posts/'+commentId);
    } 
}

export default new CommentApi();