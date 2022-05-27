import React from "react";
import styled from "styled-components";

const TodoList = ({ todoItems }) => {
  return (
    <>
      <TodoItems>
        <ul>
          {todoItems.map(item => {
            return <li key={item.id}>{item.text}</li>;
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
