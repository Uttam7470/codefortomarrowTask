import { useApp } from "../context/AppContext";

const ViewToggle = () => {
  const { view, setView } = useApp();

  return (
    <div className="view-toggle">
      <button
        className={view === "grid" ? "active" : ""}
        onClick={() => setView("grid")}
      >🔲</button>
      <button
        className={view === "list" ? "active" : ""}
        onClick={() => setView("list")}
      >📋</button>
    </div>
  );
};

export default ViewToggle;
