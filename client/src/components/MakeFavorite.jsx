import { useState } from "react";

const MakeFavorite = ({ favoriteCity }) => {
  const [name, setName] = useState("");
  const [faveData, setFaveData] = useState({
    id: "",
    user_name: "",
    favorite_city: "",
  });

  const handleSaveFave = (e) => {
    e.preventDefault();
    //updates 'fave' state
    setFaveData({
      ...fave,
      user_name: name,
      favorite_city: favoriteCity,
    });

    // Sends a POST request to the server with the 'faveData' as JSON data
    const payload = JSON.stringify(faveData);
    fetch("URLhttp://localhost:8080/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
  };
  return (
    <div className="favorite-container">
      <form onSubmit={handleSaveFave}>
        {" "}
        //update fave state with name
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
