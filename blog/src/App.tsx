
import "./App.css";
import { AddBlog } from "./features/blog/addBlog";
import { DisplayBlog } from "./features/blog/displayBlog";

function App() {
  return (
    <main>
      <AddBlog />
      <DisplayBlog />
    </main>
  );
}

export default App;
