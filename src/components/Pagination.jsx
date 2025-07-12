import { useApp } from "../context/AppContext";

const Pagination = () => {
  const { posts, currentPage, setCurrentPage } = useApp();
  const totalPages = Math.ceil(posts.length / 6);

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages) setCurrentPage(p);
  };

  return (
    <div className="pagination">
      <button onClick={() => goToPage(currentPage - 1)}>Prev</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => goToPage(i + 1)}
          className={currentPage === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => goToPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
