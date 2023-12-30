import {Link} from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to = "/">Back to homepage</Link>
    </div>
  );
}

export default Error404;