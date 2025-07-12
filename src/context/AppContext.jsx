import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  // Toggle feedback form visibility
  const toggleFeedback = () => setShowFeedback(prev => !prev);

  // Remove post and shift one from next page
  const removePost = (id) => {
    const newPosts = posts.filter(p => p.id !== id);
    setPosts(newPosts);
  };

  // Fetch posts after 5s delay
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
        .finally(() => setLoading(false));
    }, 5000);
  }, []);

  return (
    <AppContext.Provider value={{
      posts,
      setPosts,
      view,
      setView,
      currentPage,
      setCurrentPage,
      removePost,
      loading,
      showFeedback,
      setShowFeedback,
      toggleFeedback
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
