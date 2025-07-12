import { useApp } from "../context/AppContext";
import { useState } from "react";

const FeedbackForm = () => {
  const { toggleFeedback } = useApp();
  const [form, setForm] = useState({
    firstName: "", lastName: "", address: "",
    country: "", email: "", phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(form).every(v => v.trim() !== "");
    if (allFilled) {
      alert("Feedback submitted!");
      setForm({ firstName: "", lastName: "", address: "", country: "", email: "", phone: "" });
      toggleFeedback();
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3>Feedback Form</h3>
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={toggleFeedback}>Cancel</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
