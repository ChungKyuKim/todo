import React, { useState } from "react";
import styled from "styled-components";

const TodoItem = ({ item, onDelete, todoItems, setTodoItems }) => {
  const [edited, setEdited] = useState(false);
  const [editedText, setEditedText] = useState(item.text);

  const editedTextHandler = e => {
    setEditedText(e.target.value);
  };

  const onUpdate = (id, editedText) => {
    const editedTodo = todoItems.map(todo => {
      if (todo.id === id) {
        return {
          id: id,
          text: editedText,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodoItems(editedTodo);
    setEdited(!edited);
  };

  return edited ? (
    <TodoEditContent key={item.id}>
      <TodoEditText
        type="text"
        value={editedText}
        onChange={editedTextHandler}
      />
      <TodoEditBtn onClick={e => onUpdate(item.id, editedText)}>
        완료
      </TodoEditBtn>
    </TodoEditContent>
  ) : (
    <TodoContent key={item.id}>
      <TodoText>{item.text}</TodoText>
      <DelButton onClick={() => onDelete(item.id)}> 삭제 </DelButton>
      <UpdateButton onClick={() => setEdited(!edited)}>수정</UpdateButton>
    </TodoContent>
  );
};

const TodoEditContent = styled.li`
  display: flex;
`;

const TodoEditText = styled.input`
  flex: 9;
  height: 30px;
  border: none;
  outline: none;
`;

const TodoEditBtn = styled.button`
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const TodoContent = styled.li`
  list-style: none;
  display: flex;
`;
const TodoText = styled.span`
  flex: 8;
`;
const DelButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const UpdateButton = styled.button`
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default TodoItem;
