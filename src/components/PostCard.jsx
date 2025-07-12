import { useApp } from "../context/AppContext";

const PostCard = ({ post }) => {
  const { removePost } = useApp();

  return (
    <div className="card">
      <div className="avatar" />
      <div className="content">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <span>Mon, 21 Dec 2020 14:57 GMT</span>
      </div>
      <button className="delete" onClick={() => removePost(post.id)}>❌</button>
    </div>
  );
};

export default PostCard;
