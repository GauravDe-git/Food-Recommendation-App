import "./styles.css";
import { useState } from "react";

const foodDataBase = {
  Bengali: [
    {
      name: "Ilish Mach",
      rating: "8/10",
      description: "The 'ilish' fish is an iconic and tasty cuisine in Bengal."
    },
    {
      name: "Chicken Kosha",
      rating: "9/10",
      description:
        "Stewed with onions and tomatos, the 'chicken kosha' is a classic chicken curry like dish"
    },
    {
      name: "Alur Dom",
      rating: "7/10",
      description:
        "It is the bengali variant of the 'dum aloo' cooked with potatoes"
    }
  ],

  SouthIndian: [
    {
      name: "Masala Dhosa",
      rating: "8/10",
      description:
        "It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar."
    },
    {
      name: "Idli",
      rating: "7.5/10",
      description:
        "It is a popular breakfast food in south india, made with a type of rice cake."
    },
    {
      name: "upma",
      rating: "7/10",
      description:
        "Another breakfast food,cooked as a thick porridge from dry-roasted semolina or coarse rice flour."
    }
  ],

  Chinese: [
    {
      name: "Chowmein",
      rating: "8/10",
      description:
        "A popular dish in US, India, China. Stir-fried noodles with vegetables and sometimes meat or tofu"
    },
    {
      name: "Dumplings",
      rating: "7/10",
      description:
        "It consists of pieces of dough wrapped around a filling, or of dough with no filling"
    },
    {
      name: "Spring Rolls",
      rating: "7.5/10",
      description:
        "Spring rolls are a large variety of filled, rolled appetizers or dim sum."
    }
  ],

  Italian: [
    {
      name: "Pasta",
      rating: "7/10",
      description:
        "It is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking."
    },
    {
      name: "Spaghetti",
      rating: "8.5/10",
      description:
        "It is a staple food of traditional Italian cuisine. Like other pasta, spaghetti is made of milled wheat and water and sometimes enriched with vitamins and minerals."
    },
    {
      name: "Panzenella",
      rating: "8/10",
      description:
        "It is a Tuscan chopped salad of soaked stale bread, onions and tomatoes that is popular in the summer. It often includes cucumbers, sometimes basil and is dressed with olive oil and vinegar."
    }
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
            <div> {food.description} </div>
            <div> {food.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
