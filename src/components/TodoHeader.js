import React, { useState, useRef } from "react";
import styled from "styled-components";

const TodoHeader = ({ addItems }) => {
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
    <TodoHeaderWrapper>
      <h1>Things to do</h1>
      <InputWrapper>
        <TodoInput
          onChange={todoHandler}
          value={text}
          ref={textRef}
          placeholder={"할 일 있다!"}
        ></TodoInput>
        <TodoButton onClick={addTodo}>추가</TodoButton>
      </InputWrapper>
    </TodoHeaderWrapper>
  );
};
const TodoHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const TodoInput = styled.input`
  flex: 9;
  height: 30px;

  border: none;
  outline: none;
`;
const TodoButton = styled.button`
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export default TodoHeader;
