package com.lilreddit.backend.repository;

import com.lilreddit.backend.models.Post;
import com.lilreddit.backend.models.User;
import com.lilreddit.backend.models.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
