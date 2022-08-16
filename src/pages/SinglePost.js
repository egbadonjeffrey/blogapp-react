import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Single Post- {id}</h1>
    </div>
  );
};

export default SinglePost;
