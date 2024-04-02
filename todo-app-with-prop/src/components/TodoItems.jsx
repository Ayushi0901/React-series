import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoItem={item}
          todoDate={item.dueDate}
          todo
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
