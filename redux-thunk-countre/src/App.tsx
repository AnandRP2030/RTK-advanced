import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect } from "react";
import { fetchUserById } from "./redux/users/userSlice";

function App() {
  const { user, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserById(1));
  }, []);

  
  console.log("users", user, loading, error);

  if (loading === "loading") {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>hey</h1>
      {user && (
        <>
          <h2>{user.id}</h2>
          <h2>{user.name}</h2>
        </>
      )}
    </>
  );
}

export default App;
