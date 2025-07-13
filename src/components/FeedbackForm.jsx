import { useApp } from "../context/AppContext";
import { useState } from "react";

const FeedbackForm = () => {
  const { toggleFeedback } = useApp();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (
    !form.firstName ||
    !form.lastName ||
    !form.address ||
    !form.country ||
    !form.email ||
    !form.phone
  ) {
    alert("Please fill all fields.");
    return;
  }

  alert("Feedback submitted!");
  setForm({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: ""
  });
  toggleFeedback();
};

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3>Feedback Form</h3>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />

      <input
        type="text"
        name="country"
        placeholder="Country"
        value={form.country}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button" onClick={toggleFeedback}>Cancel</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
