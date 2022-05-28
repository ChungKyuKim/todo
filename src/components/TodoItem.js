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
    <li key={item.id}>
      <input type="text" value={editedText} onChange={editedTextHandler} />
      <button onClick={e => onUpdate(item.id, editedText)}>완료</button>
    </li>
  ) : (
    <li key={item.id}>
      {item.text}
      <DelButton onClick={() => onDelete(item.id)}> 삭제 </DelButton>
      <UpdateButton onClick={() => setEdited(!edited)}>수정</UpdateButton>
    </li>
  );
};

const DelButton = styled.button``;
const UpdateButton = styled.button``;

export default TodoItem;
