import { useState } from "react";
import WeatherForm from "./weatherForm";

const Home = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setName(input);
  };

  return (
    <div>
      <div>
        <label>Login</label>
        <input
          type="text"
          id="input"
          value={input}
          placeholder="Enter your name"
          onChange={handleInput}
        ></input>
        <button onClick={handleSubmit}>Save</button>
        <Form name={name} />
      </div>
    </div>
  );
};

export default Home;
