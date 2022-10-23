const initialState = {
  list: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, name } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            name: name,
          },
        ],
      };
    case "REMOVE_TODO":
      const newList = state.list.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_ALL_TODOS":
      return {
        list: [],
      };
    default:
      return state;
  }
};
