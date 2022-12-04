import { Link } from "react-router-dom";

const changeToUpperCase = (title) => {
  return title
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .join(" ");
};

const StoryTemplate = ({ id, title, body }) => {
  return (
    <div className="story" key={id}>
      <Link to={`/posts/${id}`}>
        <h1> {changeToUpperCase(title)}</h1>{" "}
      </Link>

      <p>{body}</p>
    </div>
  );
};

export default StoryTemplate;
