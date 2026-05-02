import { useState } from "react";
import "../App.css";

function Menu() {
  const foods = [
    { id: 1, name: "Burger", price: 120, image: "/images/burger.jpg" },
    { id: 2, name: "Pizza", price: 250, image: "/images/pizza.jpg" },
    { id: 3, name: "Cupcake", price: 80, image: "/images/Cupcake.jpg" },
    { id: 4, name: "Doughnut", price: 60, image: "/images/Doughnut.jpg" },
    { id: 5, name: "French Fries", price: 100, image: "/images/French Fries.jpg" },
    { id: 6, name: "Green Salad", price: 90, image: "/images/Green Salad.jpg" },
    { id: 7, name: "Hot Chocolate", price: 70, image: "/images/Hot Chocolate.jpg" },
    { id: 8, name: "Ice Cream", price: 110, image: "/images/Ice Cream.jpg" },
    { id: 9, name: "Pasta", price: 200, image: "/images/Pasta.jpg" },
    { id: 10, name: "Sandwich", price: 150, image: "/images/Sandwich.jpg" },
  ];

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [tableNo, setTableNo] = useState(null);

  const toggleFood = (food) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(selectedFoods.filter((f) => f !== food));
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };

  const handleSubmit = async () => {
    if (selectedFoods.length === 0) {
      alert("Please select at least one food 🍽️");
      return;
    }

    const randomTable = Math.floor(Math.random() * 20) + 1;
    setTableNo(randomTable);

    try {
      const res = await fetch("http://localhost:5000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tableNo: randomTable,
          foods: selectedFoods,
        }),
      });

      if (res.ok) alert("✅ Your reservation is submitted!");
      else alert("Order submission failed");
    } catch (err) {
      alert("Backend not running");
    }

    setSelectedFoods([]);
  };

  return (
    <div className="menu-container">
      <h2>🍴 Select Your Food</h2>

      <div className="menu-grid">
        {foods.map((food) => (
          <div
            key={food.id}
            className={`menu-card ${
              selectedFoods.includes(food) ? "selected" : ""
            }`}
          >
            <label className="food-label">
              <input
                type="checkbox"
                checked={selectedFoods.includes(food)}
                onChange={() => toggleFood(food)}
              />
              <div className="food-info">
                <img src={food.image} alt={food.name} />
                <h4>{food.name}</h4>
                <p>₹ {food.price}</p>
              </div>
            </label>
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Order
      </button>

      {tableNo && (
        <h3 className="table-text">
          ✅ Your Table Number is <span>{tableNo}</span>
        </h3>
      )}
    </div>
  );
}

export default Menu;