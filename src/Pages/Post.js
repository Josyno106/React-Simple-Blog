import "./../post.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams, Link } from "react-router-dom";
import { changeToUpperCase } from "../Funcs/Commonfunctions";
import MoreFromOurBlog from "../components/MorefromOurBlog";
import { useEffect, useState } from "react";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  //fetch the post using the passed post ID

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/9")
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);

  return (
    <>
      {post && (
        <>
          <article>
            <div className="top">
              <h2>{changeToUpperCase(post.title)}</h2>
            </div>

            <div className="middle">
              <p>{post.body}</p>
              <Link to="/">
                <AiOutlineArrowLeft /> All Posts
              </Link>
              {/* <MoreFromOurBlog /> */}
            </div>
          </article>
        </>
      )}

      {/* {console.log(blogsList)} */}
    </>
  );
};

export default Post;
