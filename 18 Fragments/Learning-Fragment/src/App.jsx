import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Roti",
    "Green Vagetables",
    "Carrot",
    "graps",
  ]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is: " + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Hello this is Bhavesh kerkar and im the future devloper in my entire
          family bond Adn i have confidence that i definetly Prove this
        </p>
      </Container> */}
    </>
  );
}

export default App;
