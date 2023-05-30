import moment from "moment/moment";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  const formatDate = (dateString) => {
    const formattedDate = moment(dateString).format("LLL"); // Use the "LLL" format for date and time

    if (formattedDate === "Invalid date") {
      return "Invalid Date";
    } else {
      return formattedDate;
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <p>Date and Time: {formatDate(blog.createdAt)}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
