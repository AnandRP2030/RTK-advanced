import { useDispatch } from "react-redux";
import { reactBlog } from "./blogSlice";
import { Blog } from "../../types";
import { ReactionTypes } from "../../types";
const reactionEmojis: Record<ReactionTypes, string> = {
  thumbsup: "👍",
  love: "❤️",
  wow: "😮",
  clap: "👏",
  funny: "🤭",
};
export const ReactionButtons = ({ blog }: { blog: Blog }) => {
  const dispatch = useDispatch();
  const reactionBtns = Object.entries(reactionEmojis).map(([name, emoji]) => {


    // Cast name to Reaction key
    const reactionName = name as ReactionTypes;
    
    // if (
    //   name === "thumbsup" ||
    //   name === "love" ||
    //   name === "funny" ||
    //   name === "wow" ||
    //   name === "clap"
    // ) {
    //   console.log("==> n e ", name, blog.reactions[name]);
    // }

    return (
      <button
        key={name}
        className="reactionButton"
        onClick={() => {
          dispatch(
            reactBlog({
              id: blog.id,
              reaction: name,
            })
          );
        }}
      >
        {emoji} {blog.reactions[reactionName]}
      </button>
    );
  });

  return <div>{reactionBtns}</div>;
};
