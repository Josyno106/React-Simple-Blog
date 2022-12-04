import { AiOutlineArrowRight } from "react-icons/ai";
import "./../morefromtheblog.css";
const MoreFromOurBlog = () => {
  const stories = ["Here goes story 1 title", "Hello there"];

  return (
    <>
      <h3 className="title"> More stories from our blog </h3>
      <div className="more-stories">
        {stories.map((story, index) => (
          <div key={index}>
            {story} <AiOutlineArrowRight className="icon" />
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreFromOurBlog;
