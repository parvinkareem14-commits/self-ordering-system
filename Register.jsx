import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    contact: "",
    seatType: "",
    foodType: "",
    members: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
      
        alert("🎉 Registration Successful!");
      
        navigate("/menu");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.log(error);
      alert("Backend not running");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-box">
      <h2>Table Registration</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact"
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="seatType"
        placeholder="Seat Type (AC / Non-AC)"
        onChange={handleChange}
      />

      <input
        type="text"
        name="foodType"
        placeholder="Food Type (Veg / Non-Veg)"
        onChange={handleChange}
      />

      <input
        type="number"
        name="members"
        placeholder="Number of Members"
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;