import { VoteType } from './vote-type';

export type VotePayload = {
    voteType: VoteType | undefined;
    postId: number | undefined;
}
