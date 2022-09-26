import "./App.css";
import React, { useEffect , useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts.splice(0,11)));
  }, []);

  return (
    <div className="App">
      <h1 className="bg-danger text-white">Fetch API</h1>
      {posts.map((post) => (
        <div key={post.id} className="bg-info">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
