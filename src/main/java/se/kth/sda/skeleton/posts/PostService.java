package se.kth.sda.skeleton.posts;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.Date;
import java.util.List;

@Service
public class PostService {

    PostRepository postRepository;
    UserService userService;
    AuthService authService;

    public PostService(PostRepository postRepository, UserService userService, AuthService authService){

        this.postRepository = postRepository;
        this.userService = userService;
        this.authService = authService;
    }

    //saves post in postRepo.
    public ResponseEntity<Post> create(Post postParam){
        return ResponseEntity.status(HttpStatus.CREATED).body(postRepository.save(postParam));
    }

    //Fetch all posts in postRepo.
    public ResponseEntity<List<Post>> fetchAll(){
        return ResponseEntity.ok(postRepository.findAll());
    }

    //Fetch post by id.
    public Post fetchPostById(Long idParam){
        return postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
    }

    //Delete post by id.
    public void deletePostById(Long idParam){
        Post post = postRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        postRepository.delete(post);
    }

    //Update a post.
    public Post update(Post postUpdate, Post existingPost){
        existingPost.setBody(postUpdate.getBody());
        existingPost.setLastUpdated(new Date());
        return existingPost;
    }

    //Generates a post instance from body.
    public Post generatePost(Post postParam){
        User author = userService.findUserByEmail(authService.getLoggedInUserEmail());
        postParam.setAuthor(author);
        postParam.setDateCreated(new Date());
        return postParam;
    }

}
