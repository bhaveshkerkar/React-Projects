import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      Task_name: "Drink Water",
      Due_date: "12/1/2025",
    },
    {
      Task_name: "Go To Collage",
      Due_date: "12/1/2025",
    },
    {
      Task_name: "Go To GYM",
      Due_date: "12/1/2025",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}
export default App;
