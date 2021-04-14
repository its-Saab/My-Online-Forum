package se.kth.sda.skeleton.posts;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.springframework.data.annotation.CreatedDate;
import se.kth.sda.skeleton.comments.Comment;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.List;


@Entity
public class Post {
    //Checked
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post body")
    private String body;


    @CreatedDate
    private Date createdAt;

    @OneToMany(mappedBy = "commentedPost")
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private List<Comment> postCommentsList;


    public Post() {
    }

    public Post(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public List<Comment> getPostCommentsList() {
        return postCommentsList;
    }

    public void setPostCommentsList(List<Comment> postCommentsList) {
        this.postCommentsList = postCommentsList;
    }

    public Date getCreatedAt() {
        return new Date();
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
