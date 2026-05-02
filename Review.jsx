import { useState } from "react";
import "../App.css";

function Review() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Please select star rating ⭐");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          rating,
          feedback
        })
      });

      if (res.ok) {
        alert("✅ Review submitted successfully");
        setRating(0);
        setFeedback("");
      } else {
        alert("❌ Review failed");
      }
    } catch (err) {
      alert("Backend not running");
    }
  };

  return (
    <div className="review-box">
      <h2>After enjoying your meal, please submit your review ⭐</h2>

      {/* ⭐ STAR RATING */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "star active" : "star"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default Review;