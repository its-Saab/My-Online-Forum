package se.kth.sda.skeleton.comments;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import se.kth.sda.skeleton.auth.AuthService;
import se.kth.sda.skeleton.exceptions.ResourceNotFoundException;
import se.kth.sda.skeleton.exceptions.UnAuthorizedUserException;
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
        if(isAuthorized(comment)){
            commentRepository.delete(comment);
        } else {
            throw new UnAuthorizedUserException();
        }
    }

    public Comment update(Comment commentParam, Comment currentComment){
        if(isAuthorized(currentComment)){
            currentComment.setBody(commentParam.getBody());
            return currentComment;
        } else {
            throw new UnAuthorizedUserException();
        }
    }

    //Generates a post instance from body.
    public Comment generateComment(Comment commentParam){
        Date currentDate = new Date();
        User user = userService.findUserByEmail(authService.getLoggedInUserEmail());
        commentParam.setUser(user);
        commentParam.setDateCreated(currentDate);
        return commentParam;
    }

    //to authenticate the user or author in order to allow delete or update
    public boolean isAuthorized(Comment existingComment){
        User postAuthor = existingComment.getUser();
        User userInSession = userService.findUserByEmail(authService.getLoggedInUserEmail());
        return postAuthor.equals(userInSession);
    }

}