import "./styles.css";
import { useState } from "react";

const foodDataBase = {
  Bengali: [
    { name: "Ilish Mach", rating: "8/10" },
    { name: "Chicken Kosha", rating: "9/10" }
  ],

  SouthIndian: [
    { name: "Masala Dhosa", rating: "8/10" },
    { name: "Idli", rating: "7.5/10" }
  ],

  Chinese: [
    { name: "Chowmein", rating: "8/10" },
    { name: "Dumplings", rating: "7/10" }
  ],

  Italian: [
    { name: "Pasta", rating: "7/10" },
    { name: "Spaghetti", rating: "8.5/10" }
  ]
};

var foodArray = Object.keys(foodDataBase);

export default function App() {
  const [currentFood, SetFood] = useState("Italian");

  function buttonClickHandler(type) {
    SetFood(type);
  }

  return (
    <div className="App">
      <h1>My Food Recommendations!</h1>
      <p>Checkout my favorite foods.Select one to find out. </p>
      <div>
        {foodArray.map((type) => (
          <button onClick={() => buttonClickHandler(type)} key={type}>
            {type}
          </button>
        ))}
      </div>
      <hr />
      <ul>
        {foodDataBase[currentFood].map((food) => (
          <li
            style={{
              listStyle: "none",
              border: "1px solid black",
              padding: "1rem",
              borderRadius: "0.5rem",
              margin: "1rem"
            }}
            key={food.name}
          >
            <div> {food.name} </div>
            <div> {food.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
