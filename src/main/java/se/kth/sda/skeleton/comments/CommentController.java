package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;
import se.kth.sda.skeleton.posts.Post;
import se.kth.sda.skeleton.posts.PostRepository;

import java.util.List;

@RestController
public class CommentController {
    CommentRepository commentRepository;
    PostRepository postRepository;

    @Autowired
    public CommentController(CommentRepository commentRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.postRepository = postRepository;
    }

    //Post a comment on a post/checked
    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment commentParam){
        Post existingPost = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        commentParam.setCommentedPost(existingPost);
        return ResponseEntity.status(HttpStatus.CREATED).body(commentRepository.save(commentParam));
    }

    //Retrieve all comments on a post/checked
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<Comment>> listPostComments(@PathVariable Long postId){
        Post existingPost = postRepository.findById(postId).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(existingPost.getPostCommentsList());
    }

    //Delete a comment by id/checked
    @DeleteMapping("/comments/{commentId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteComment(@PathVariable Long commentId){
        Comment existingComment = commentRepository.findById(commentId).orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(existingComment);
    }

    //Update comment by id/checked
    @PutMapping("/comments/{commentId}")
    public ResponseEntity<Comment> updateComment(@PathVariable Long commentId, @RequestBody Comment commentParam){
        Comment existingComment = commentRepository.findById(commentId).orElseThrow(ResourceNotFoundException::new);
        commentParam.setId(existingComment.getId());
        commentParam.setCommentedPost(existingComment.getCommentedPost());
        return ResponseEntity.ok(commentRepository.save(commentParam));
    }
}