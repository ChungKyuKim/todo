import React, { useState, useRef } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const no = useRef(1);
  const addItems = text => {
    setTodoItems([
      ...todoItems,
      {
        id: no.current++,
        text: text,
      },
    ]);
  };
  return (
    <TodoWrapper>
      <TodoBoard>
        <TodoHeader
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          addItems={addItems}
        ></TodoHeader>
        <TodoList todoItems={todoItems}></TodoList>
      </TodoBoard>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const TodoBoard = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 60px;
`;
export default Todo;
