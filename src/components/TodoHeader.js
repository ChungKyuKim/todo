import React, { useState, useRef } from "react";
import styled from "styled-components";

const TodoHeader = ({ todoItems, setTodoItems, addItems }) => {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const todoHandler = e => {
    const value = e.target.value;
    setText(value);
  };

  const addTodo = e => {
    e.preventDefault();

    if (!text) return;
    addItems(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <div>
      <h1>Things To do</h1>
      <TodoInput onChange={todoHandler} value={text} ref={textRef}></TodoInput>
      <TodoButton onClick={addTodo}>추가</TodoButton>
    </div>
  );
};

const TodoInput = styled.input``;
const TodoButton = styled.button``;
export default TodoHeader;
