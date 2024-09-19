import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBlog } from "./blogSlice";
import { selectAllusers } from "../user/userSlice";
import { User } from "../../types";

export const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    userId: "",
    title: "",
    content: "",
  });
  console.log("==blog", blogData);
  const dispatch = useDispatch();
  const allUsers = useSelector(selectAllusers);
  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBlogData({
      ...blogData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBlogData({
      ...blogData,
      userId: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, content, userId } = blogData;
    if (title && content && userId) {
      dispatch(addBlog(blogData));
      setBlogData({
        ...blogData,
        title: "",
        content: "",
      });
    }
  };

  const mapAllUsers = allUsers.map((u: User) => {
    return (
      <option key={u.id} value={u.id}>
        {" "}
        {u.name}
      </option>
    );
  });

  return (
    <section>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit}>
        <label> Select User</label>
        <select name="userId" onChange={handleSelectChange}>
          <option value="">Select user</option>
          {mapAllUsers}
        </select>
        <input
          type="text"
          value={blogData.title}
          name="title"
          placeholder="Title"
          onChange={handleChanges}
        />

        <input
          type="text"
          value={blogData.content}
          name="content"
          placeholder="Content"
          onChange={handleChanges}
        />

        <input type="submit" value="Post" />
      </form>
    </section>
  );
};
