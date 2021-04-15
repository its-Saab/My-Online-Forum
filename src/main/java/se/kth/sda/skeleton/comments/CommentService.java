package se.kth.sda.skeleton.comments;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;
import se.kth.sda.skeleton.user.User;
import se.kth.sda.skeleton.user.UserService;

import java.util.Date;

@Service
public class CommentService {
    CommentRepository commentRepository;
    UserService userService;
    AuthService authService;

    public CommentService(CommentRepository commentRepository, UserService userService, AuthService authService){
        this.userService = userService;
        this.authService = authService;
        this.commentRepository = commentRepository;
    }

    public ResponseEntity<Comment> create(Comment commentParam){
        return ResponseEntity.status(HttpStatus.CREATED).body(commentRepository.save(commentParam));
    }

    public Comment fetchById(Long idParam){
        return commentRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
    }
    public void deleteComment(Long idParam){
        Comment comment = commentRepository.findById(idParam).orElseThrow(ResourceNotFoundException::new);
        commentRepository.delete(comment);
    }

    public Comment update(Comment commentParam, Comment currentComment){

        currentComment.setBody(commentParam.getBody());
        currentComment.setLastUpdated(new Date());
        return currentComment;
    }

    //Generates a post instance from body.
    public Comment generateComment(Comment commentParam){
        Date currentDate = new Date();
        User user = userService.findUserByEmail(authService.getLoggedInUserEmail());
        commentParam.setUser(user);
        commentParam.setDateCreated(currentDate);
        commentParam.setLastUpdated(currentDate);
        return commentParam;
    }
}