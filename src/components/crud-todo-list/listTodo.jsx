import React from "react";

const List = ({ listprops, deleteTask, editTask }) => {
  if (!Array.isArray(listprops)) {
    return <div>listprops is not an array!</div>;
  }

  return (
    <div className="list-card">
      <ul>
        {listprops.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>&times;</button>
            <button onClick={() => editTask(index)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
