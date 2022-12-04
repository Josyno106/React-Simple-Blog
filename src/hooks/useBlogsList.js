import { useEffect, useState } from "react";

const useBlogsList = (url) => {
  const [blogsList, setBlogsList] = useState([]);
  //fetch the blogs from api
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setBlogsList(json);
      });
  }, []);

  return blogsList;
};

export default useBlogsList;
