import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import "./././App.css";
import TodoItems from "./././components/TodoItems";

function App() {
  const todoItems = [
    { name: "buy tshirt", dueDate: "6-06-21" },
    { name: "buy lower", dueDate: "6-06-22" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />

      <TodoItems todoItems={todoItems}> </TodoItems>
    </center>
  );
}

export default App;
