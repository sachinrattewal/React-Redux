export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      name: text,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};

export const removeAllTodos = () => {
  return {
    type: "REMOVE_ALL_TODOS",
  };
};
