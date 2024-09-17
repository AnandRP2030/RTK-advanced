import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { addBlog } from "./blogSlice";

export const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
  });
  const dispatch = useDispatch();
  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, content } = blogData;
    if (title && content) {
      dispatch(addBlog(blogData));
      setBlogData({
        title: "",
        content: "",
      });
    }
  };
  return (
    <section>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChanges}
        />

        <input
          type="text"
          name="content"
          placeholder="Content"
          onChange={handleChanges}
        />

        <input type="submit" value="Post" />
      </form>
    </section>
  );
};
