import React from "react";
import { useSelector } from "react-redux";

const UseCase = () => {
  const allTodos = useSelector((state) => state.reducer.list);
  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      No. of Todos for {new Date().toDateString()} are {allTodos.length}
    </div>
  );
};

export default UseCase;
