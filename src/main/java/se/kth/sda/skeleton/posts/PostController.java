package se.kth.sda.skeleton.posts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;

import javax.validation.Valid;
import java.util.List;

@RestController
public class PostController {
    PostRepository postRepository;

    @Autowired
    public PostController(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
    //Create a new post
    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@Valid @RequestBody Post postParam){
        return ResponseEntity.status(HttpStatus.CREATED).body(postRepository.save(postParam));
    }

    //Get all posts
    @GetMapping("/posts")
    public ResponseEntity<List<Post>> getAllPosts(){
        return ResponseEntity.ok(postRepository.findAll());
    }

    @GetMapping("/posts/{idParam}")
    public ResponseEntity<Post> getPostById(@PathVariable Long idParam){
        Post post = postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        return ResponseEntity.ok(post);
    }

    @PutMapping("/posts/{idParam}")
    public ResponseEntity<Post> postUpdate(@PathVariable Long idParam, @RequestBody Post postParam){
        Post existingPost = postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        postParam.setId(idParam);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(postRepository.save(postParam));
    }

    @DeleteMapping("/posts/{idParam}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable Long idParam){
        Post post = postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        postRepository.delete(post);
    }



}
