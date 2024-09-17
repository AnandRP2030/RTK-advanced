import { useSelector } from "react-redux";
import { selectAllBlogs } from "./blogSlice";
export const DisplayBlog = () => {
  const blogs = useSelector(selectAllBlogs);
  console.log("==blogs", blogs);

  const allBlogs = blogs.map((b) => {
    return (
      <article key={b.id}>
        <h3>{b.title}</h3>
        <p>{b.content}</p>
      </article>
    );
  });

  return (
    <section>
      <ul>{allBlogs}</ul>
    </section>
  );
};
