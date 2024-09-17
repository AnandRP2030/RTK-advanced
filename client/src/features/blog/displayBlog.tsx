import { useSelector } from "react-redux";
import { selectAllBlogs } from "./blogSlice";
import { selectAllusers } from "../user/userSlice";
import { User } from "../../types";
import { TimeAgo } from "./timeago";
export const DisplayBlog = () => {
  const blogs = useSelector(selectAllBlogs);
  const allUsers = useSelector(selectAllusers);
  const revBlogs = Array.isArray(blogs) ? [...blogs].reverse() : [];

  const findUserById = (id: string): string => {
    const user = allUsers.find((u: User) => u.id === id);
    return user ? user.name : "Unknown";
  };

  const allBlogs = revBlogs.map((b) => {
    const { userId, id, title, content, date } = b;
    const userName = findUserById(userId);
    return (
      <article key={id}>
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="flex-bw">

        <p className="postCredit">Author Name: {userName}</p>
        <TimeAgo timestamp={date} />
        </div>
      </article>
    );
  });

  return (
    <section>
      <ul>{allBlogs}</ul>
    </section>
  );
};
