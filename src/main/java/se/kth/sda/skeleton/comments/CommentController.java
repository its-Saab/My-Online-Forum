package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostService;

import java.util.List;

@RestController
public class CommentController {
    CommentService commentService;
    PostService postService;

    @Autowired
    public CommentController(CommentService commentService, PostService postService) {
        this.commentService = commentService;
        this.postService = postService;
    }

    //Post a comment on a post/checked
    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment commentParam){
        Post existingPost = postService.fetchPostById(postId);
        commentParam.setCommentedPost(existingPost);
        return commentService.create(commentService.generateComment(commentParam));
    }

    //Get all comments on a post/checked
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> listPostComments(@PathVariable Long postId){
        Post existingPost = postService.fetchPostById(postId);
        return ResponseEntity.ok(existingPost.getPostCommentsList());
    }

    //Delete a comment by id/checked
    @DeleteMapping("/comments/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long commentId){
        commentService.deleteComment(commentId);
    }

    //Update comment by id/checked
    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody Comment commentParam){
        Comment existingComment = commentService.fetchById(commentId);
        return commentService.create(commentService.update(commentParam,existingComment));
    }
}