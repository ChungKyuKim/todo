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
        <SearchWrapper>
          <SearchBar
            type="text"
            onChange={searchHandler}
            value={search}
            placeholder="할 일 뭐였지?"
          ></SearchBar>
          <SearchButton onClick={showSearchResult}>검색</SearchButton>
        </SearchWrapper>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #e8e8e8;
  border-radius: 20px;
  padding: 20px;
`;
const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;
const SearchBar = styled.input`
  flex: 9;
  height: 30px;
  border: none;
  outline: none;
`;
const SearchButton = styled.button`
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export default Todo;
