package se.kth.sda.skeleton.posts;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import se.kth.sda.skeleton.comments.Comment;
import se.kth.sda.skeleton.user.User;

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

    private Date dateCreated;
    private Date lastUpdated;

    @Column(nullable = false)
    @NotEmpty(message = "Please provide a valid post body")
    private String body;


    @OneToMany(mappedBy = "commentedPost", cascade = CascadeType.ALL)
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
    private List<Comment> postCommentsList;

    @ManyToOne
    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @JsonIdentityReference(alwaysAsId = true)
    private User author;

    public Post() {
    }

    public Post(Long id, @NotEmpty(message = "Please provide a valid post body") String body, User author) {
        this.id = id;
        this.body = body;
        this.dateCreated = new Date();
        this.lastUpdated = this.dateCreated;
        this.author = author;
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

    public Date getDateCreated() {
        return this.dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }
}
