import { useApp } from "./context/AppContext";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";
import ViewToggle from "./components/ViewToggle";
import FeedbackForm from "./components/FeedbackForm";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const { posts, view, currentPage, loading, showFeedback } = useApp();
  const postsPerPage = 6;

  const start = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(start, start + postsPerPage);

  return (
    <div className="app">
      <Sidebar />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className={`content ${view}`}>
          {currentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
          <Pagination />
        </div>
      )}
      {showFeedback && <FeedbackForm />}
    </div>
  );
}

export default App;
