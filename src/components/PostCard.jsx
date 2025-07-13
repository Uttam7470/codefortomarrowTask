

import { useApp } from "../context/AppContext";

const PostCard = ({ post }) => {
  const { view, removePost } = useApp();

  return (
    <div
      className={`card ${view}`}
      onClick={() => {
        if (view === "grid") alert(`Clicked on: ${post.title}`);
      }}
    >
     
      {view === "list" && <div className="avatar" />}

    
      {view === "grid" && <div className="grid-box" />}

      <div className="card-body">
        <h3>{post.title.slice(0, 30)}...</h3>
        <p>{post.body.slice(0, 60)}...</p>
        <span>Mon, 21 Dec 2020 14:57 GMT</span>
      </div>

      <button
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          removePost(post.id);
        }}
      >
        ✕
      </button>
    </div>
  );
};

export default PostCard;
