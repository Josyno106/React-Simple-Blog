import "./styles.css";
import { TypeAnimation } from "react-type-animation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Posts from "./Pages/Posts";
import Post from "./Pages/Post";
import NotFound from "./Pages/404";

export default function App() {
  return (
    <>
      <div className="App">
        <h1 className="title">
          <TypeAnimation
            sequence={["Welcome to Blog::splee", 2000, ""]}
            speed={40} // Must be in range between 1 and 99!
            repeat={Infinity}
          />
        </h1>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </>
  );
}
