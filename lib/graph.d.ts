import { BskyAgent } from "@atproto/api";
import { Did, User, UserIdentifier } from "./types";
export declare const getFollowers: ({ agent, actor, limit, cursor, }: {
    agent: BskyAgent;
    actor: UserIdentifier;
    limit?: number;
    cursor?: string;
}) => Promise<{
    items: User[];
    cursor?: string;
}>;
export declare const getFollows: ({ agent, actor, limit, cursor, }: {
    agent: BskyAgent;
    actor: UserIdentifier;
    limit?: number;
    cursor?: string;
}) => Promise<{
    items: User[];
    cursor?: string;
}>;
export declare const follow: ({ agent, did }: {
    agent: BskyAgent;
    did: Did;
}) => Promise<void>;
export declare const unfollow: ({ agent, identifier }: {
    agent: BskyAgent;
    identifier: UserIdentifier;
}) => Promise<boolean>;
