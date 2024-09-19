export interface User {
  id: string;
  name: string;
}

export interface Blog {
  id: string;
  userId: string;
  title: string;
  content: string;
  date: string;
  reactions: {
    thumbsup: number;
    love: number;
    wow: number;
    clap: number;
    funny: number;
  };
}

export type ReactionTypes = "thumbsup" | "love" | "wow" | "clap" | "funny";
