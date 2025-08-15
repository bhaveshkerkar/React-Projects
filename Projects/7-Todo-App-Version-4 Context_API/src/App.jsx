import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { Task_name: itemName, Due_date: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  const defaultTodoItems = [{ Task_name: itemName, Due_date: itemDueDate }];

  return (
    <TodoItemsContext.Provider value={[]}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {<WelcomeMessage todoItems={todoItems} />}
        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
