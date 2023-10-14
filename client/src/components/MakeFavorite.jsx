import { useState } from "react";

const MakeFavorite = ({ favoriteCity }) => {
  //   const [name, setName] = useState({
  //     id: "",
  //     user_name: "", req.body.user_name
  //     favorite_city: favoriteCity req.body.favorite_city
  //   });

  //   const handleChange = (event) => {
  //     const name = event.target.user_name;
  //     const value = event.target.value;
  //     setName((values)
  //   };
  return (
    <div className="favorite-container">
      <form onSubmit="">
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          //   value={formData.user_name}
          //   onChange={handleChange}
        ></input>
        <button type="submit">Save as my favorite city</button>
      </form>
    </div>
  );
};

export default MakeFavorite;
