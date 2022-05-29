import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, setTodoItems, searchResult }) => {
  const onDelete = id => {
    const result = todoItems.filter(item => item.id !== id);
    setTodoItems(result);
  };

  return (
    <>
      <TodoItems>
        <TodoListUl>
          {searchResult.length >= 1
            ? searchResult.map(item => {
                return <TodoItem item={item} />;
              })
            : todoItems.map(item => {
                return (
                  <TodoItem
                    item={item}
                    onDelete={onDelete}
                    setTodoItems={setTodoItems}
                    todoItems={todoItems}
                  />
                );
              })}
        </TodoListUl>
      </TodoItems>
    </>
  );
};

const TodoItems = styled.div`
  width: 100%;
  height: 100%;
`;

const TodoListUl = styled.ul`
  padding-left: 5px;
`;

export default TodoList;
