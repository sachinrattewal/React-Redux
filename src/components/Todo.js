import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllTodos, removeTodo } from "../actions/action";
import "../App.css";

const Todo = () => {
  const [text, setText] = useState("");

  const allTodos = useSelector((state) => state.reducer.list);

  const dispatch = useDispatch();

  return (
    <div className="add">
      <h1>Todos List</h1>
      <div style={{ display: "flex", gap: "15px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            border: "1px solid #F2F2F2",
            outline: "none",
            height: "20px",
            padding: "5px 10px",
          }}
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "#fff",
            border: "none",
            outline: "none",
            padding: "5px 15px",
            cursor: "pointer",
          }}
          onClick={() => {
            if (text) {
              dispatch(addTodo(text));
            }
            setText("");
          }}
        >
          Add
        </button>
      </div>
      {allTodos && !allTodos.length && (
        <div style={{ margin: "15px" }}>No Todos Found</div>
      )}
      {allTodos.map((ele) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "15px",
              margin: "15px",
            }}
            key={ele.id}
          >
            <div>{ele.name}</div>
            <button
              style={{
                backgroundColor: "#b15454",
                color: "#fff",
                border: "none",
                outline: "none",
                padding: "5px 15px",
                cursor: "pointer",
              }}
              onClick={() => dispatch(removeTodo(ele.id))}
            >
              Delete
            </button>
          </div>
        );
      })}

      {allTodos && allTodos.length > 0 && (
        <button
          style={{
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            outline: "none",
            padding: "5px 15px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(removeAllTodos())}
        >
          Delete All Todos
        </button>
      )}
    </div>
  );
};

export default Todo;
