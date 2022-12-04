import { useState } from "react";
import BlogList from "./components/Blog";
import { TypeAnimation } from "react-type-animation";

const HomePage = () => {
  return (
    <>
      <div className="App">
        <h1 className="title">
          <TypeAnimation
            sequence={["Welcom to my Blog", 2000, ""]}
            speed={40} // Must be in range between 1 and 99!
            repeat={Infinity}
          />
        </h1>

        <BlogList />
      </div>
    </>
  );
};

export default HomePage;
