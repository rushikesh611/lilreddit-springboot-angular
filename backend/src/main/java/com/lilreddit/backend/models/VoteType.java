package com.lilreddit.backend.models;

public enum VoteType {
    UPVOTE(1), DOWNVOTE(-1),
    ;

    VoteType(int direction){
    }
}
