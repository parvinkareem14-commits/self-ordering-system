

import "../App.css"; 

function Home() {
  return (
    <div className="home-container">
      <img src="/images/flash.jpg" alt="Flash Restaurant" className="home-image" />
      <div className="home-overlay">
        <h1>🍴 Welcome to Flash Restaurant 🍴</h1>
        <p>"Delicious food, happy mood!"</p>
      </div>
    </div>
  );
}

export default Home;