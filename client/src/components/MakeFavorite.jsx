import { useState } from "react";

const MakeFavorite = ({ favoriteCity }) => {
  //fave city is this
  const [name, setName] = useState(""); //name is now DEstinee
  const [fave, setFave] = useState({
    id: "",
    user_name: "",
    favorite_city: "",
  });

  const handleSaveFave = (e) => {
    e.preventDefault();
    //update fave state such that user_name is name state
    //update fave such that favorite  city = {favorite city} props
    setFave({
      ...fave,
      user_name: name,
      favorite_city: favoriteCity,
    });

    //does a post request
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
