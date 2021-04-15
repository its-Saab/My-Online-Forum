package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.Date;
import java.util.List;

@RestController
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;

    }


    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post postParam){
        return postService.create(postService.generatePost(postParam));
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        return postService.fetchAll();
    }

    @GetMapping("/posts/{idParam}")
    public ResponseEntity<Post> getPostById(@PathVariable Long idParam){
        return ResponseEntity.ok(postService.fetchPostById(idParam));
    }

    @PutMapping("/posts/{idParam}")
    public ResponseEntity<Post> postUpdate(@PathVariable Long idParam, @RequestBody Post postParam){
       Post existingPost = postService.fetchPostById(idParam);
        return postService.create(postService.update( postParam, existingPost));
    }

    @DeleteMapping("/posts/{idParam}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long idParam){
       postService.deletePostById(idParam);
    }
}
