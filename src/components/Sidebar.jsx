

import { useApp } from "../context/AppContext";
import ViewToggle from "./ViewToggle";

const Sidebar = () => {
  const { toggleFeedback } = useApp();

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-img"></div>
        <div>
          <strong>Hi Reader,</strong>
          <p>Here’s your News!</p>
        </div>
      </div>

      <h2>View Toggle</h2>
      <ViewToggle />

      <h2>Have a Feedback?</h2>
      <button onClick={toggleFeedback}>We're Listening!</button>
    </div>
  );
};

export default Sidebar;
