import React, { useState, useRef } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
  console.log(search);

  const searchHandler = e => {
    const searchResult = e.target.value;
    setSearch(searchResult);
  };

  const showSearchResult = e => {
    e.preventDefault();

    if (!search) {
      setSearchResult([]);
    } else {
      setSearchResult(
        todoItems.filter(item => item.text.indexOf(search) !== -1)
      );
    }

    setSearch("");
  };
  return (
    <TodoWrapper>
      <TodoBoard>
        <div>TodoSearch</div>
        <SearchBar
          type="text"
          onChange={searchHandler}
          value={search}
        ></SearchBar>
        <SearchButton onClick={showSearchResult}>검색</SearchButton>
        <TodoHeader addItems={addItems}></TodoHeader>
        <TodoList
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          searchResult={searchResult}
        ></TodoList>
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
const SearchBar = styled.input``;
const SearchButton = styled.button``;
export default Todo;
