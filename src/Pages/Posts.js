import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StoryTemplate from "../components/Template";
const Posts = () => {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPostsArray(json);
      });
  }, []);

  return (
    <>
      <h1> Here are all the Posts </h1>
      <h1> Here are all the Posts </h1>
      <h1> Here are all the Posts </h1>

      {/* {postsArray.map((post, index) => {
        return (
          <Link to={`/posts/${post}`} key={index}>
            Post {post.title} <br />
          </Link>
        );
      })} */}
    </>
  );
};

export default Posts;
