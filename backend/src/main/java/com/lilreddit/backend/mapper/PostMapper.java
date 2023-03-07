package com.lilreddit.backend.mapper;

import com.lilreddit.backend.dto.PostRequest;
import com.lilreddit.backend.dto.PostResponse;
import com.lilreddit.backend.models.Post;
import com.lilreddit.backend.models.Subreddit;
import com.lilreddit.backend.models.User;
import com.lilreddit.backend.repository.CommentRepository;
import com.lilreddit.backend.repository.VoteRepository;
import com.lilreddit.backend.service.AuthService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.ocpsoft.prettytime.PrettyTime;
import org.springframework.beans.factory.annotation.Autowired;

@Mapper(componentModel = "spring")
public abstract class PostMapper {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private AuthService authService;

    @Autowired
    private VoteRepository voteRepository;

    @Mapping(target = "createdDate", expression = "java(java.time.Instant.now())")
    @Mapping(target = "description", source = "postRequest.description")
    @Mapping(target = "subreddit", source = "subreddit")
    @Mapping(target = "user", source = "user")
    @Mapping(target = "voteCount", constant = "0")
    public abstract Post map(PostRequest postRequest, Subreddit subreddit, User user);

    @Mapping(target = "id", source = "postId")
    @Mapping(target = "subredditName", source = "subreddit.name")
    @Mapping(target = "userName", source = "user.username")
    @Mapping(target = "commentCount", expression = "java(commentCount(post))")
    @Mapping(target = "duration", expression = "java(getDuration(post))")
    public abstract PostResponse mapToDto(Post post);

    Integer commentCount(Post post) {
        return commentRepository.findByPost(post).size();
    }

    String getDuration(Post post) {
        PrettyTime prettyTime = new PrettyTime();
        return prettyTime.format(post.getCreatedDate());
    }


}
