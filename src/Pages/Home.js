import StoryTemplate from "../components/Template";
import useBlogsList from "../hooks/useBlogsList";

const Home = () => {
  const blogsList = useBlogsList(
    "https://jsonplaceholder.typicode.com/posts?&_limit=8"
  );

  return (
    <>
      {blogsList.map((blog, index) => (
        <StoryTemplate id={blog.id} title={blog.title} body={blog.body} />
      ))}
    </>
  );
};
export default Home;
