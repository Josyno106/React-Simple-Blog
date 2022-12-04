import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h3> Oooooppppssss... nothing found here </h3>
      <Link to="/"> Back Home </Link>
    </>
  );
};

export default NotFound;
