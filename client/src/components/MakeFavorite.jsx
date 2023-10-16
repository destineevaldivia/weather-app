import { useState } from "react";

const MakeFavorite = ({ favoriteCity, loadCity }) => {
  const [name, setName] = useState("");
  const [faveData, setFaveData] = useState({
    id: "",
    user_name: "",
    favorite_city: "",
  });

  const handleSaveFave = (e) => {
    e.preventDefault();
    setFaveData({
      ...faveData,
      user_name: name,
      favorite_city: favoriteCity,
    });

    // Sends a POST request to the server with the 'faveData' as JSON data
    const payload = JSON.stringify(faveData);
    fetch("http://localhost:5004/api/home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    }).then((response) => {
      if (!response.ok) {
        throw new Error("fetch from client side failed");
      }
      return response.json();
    });
    loadCity();
  };
  return (
    <div className="favorite-container">
      <form onSubmit={handleSaveFave}>
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          onChange={({ target }) => setName(target.value)}
        />
        <button type="submit">Save as my favorite city</button>
      </form>
    </div>
  );
};

export default MakeFavorite;
