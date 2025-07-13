

import { useApp } from "../context/AppContext";

const ViewToggle = () => {
  const { view, setView } = useApp();

  return (
    <div className="view-toggle">
      <button
        className={view === "list" ? "active" : ""}
        onClick={() => setView("list")}
      >
        <span role="img" aria-label="list">List</span>
      </button>
      <button
        className={view === "grid" ? "active" : ""}
        onClick={() => setView("grid")}
      >
        <span role="img" aria-label="grid">Card</span>
      </button>
    </div>
  );
};

export default ViewToggle;
