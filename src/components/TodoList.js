import React from "react";
import styled from "styled-components";

const TodoList = ({ todoItems, setTodoItems }) => {
  const onDelete = id => {
    const result = todoItems.filter(item => item.id !== id);
    setTodoItems(result);
  };
  return (
    <>
      <TodoItems>
        <ul>
          {todoItems.map(item => {
            return (
              <li key={item.id} onClick={() => onDelete(item.id)}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </TodoItems>
    </>
  );
};

const TodoItems = styled.div`
  width: 100%;
  height: 100%;
`;
export default TodoList;
