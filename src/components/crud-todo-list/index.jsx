import React, { useState } from "react";
import ListTodo from "./listTodo";
import "./style.css";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  function handleTodoTask(e) {
    setTask(e.target.value);
  }
  function handleAddNewTask() {
    let arr = [...todoList, task];
    setTodoList(arr);
    setTask("");
  }
  function handleDeleteTask(index) {
    let delElem = todoList.filter((_, i) => i !== index);
    setTodoList(delElem);
  }

  function handleEditTask(index) {
    setEditingIndex(index);
    setEditingTask(todoList[index]);
  }
  function handleUpdateTask() {
    let updatedList = todoList.map((item, index) =>
      index === editingIndex ? editingTask : item
    );
    setTodoList(updatedList);
    setEditingIndex(null);
    setEditingTask("");
  }

  console.log(todoList);
  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="insert task"
        onChange={handleTodoTask}
        value={task}
      />
      <button onClick={handleAddNewTask}>add task</button>

      <div className="todo-list">
        {editingIndex !== null ? (
          <div>
            <input
              type="text"
              value={editingTask}
              onChange={(e) => setEditingTask(e.target.value)}
            />
            <button onClick={handleUpdateTask}>Update</button>
          </div>
        ) : (
          <ListTodo
            listprops={todoList}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
