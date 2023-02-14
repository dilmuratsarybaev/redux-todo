export const actionTypes = {
  ADDTODO: "ADDTODO",
  DELETE: "DELETE",
  DELETE_ALL: "DELETE_ALL",
  EDIT: "EDIT",
  COMPLETED: "COMPLETED",
};

const initialState = [
  {
    id: 1,
    todo: "React",
    completed: false,
  },
  {
    id: 2,
    todo: "Redux",
    completed: false,
  },
];

export const todosReducer = (state = initialState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case actionTypes.ADDTODO:
      return [...state, action.payload];
    case actionTypes.DELETE:
      return [...state].filter((todo) => todo.id !== action.payload);
    case actionTypes.DELETE_ALL:
      return [];
    case actionTypes.EDIT:
      return [...state].map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.text }
          : todo
      );
    case actionTypes.COMPLETED:
      return [...state].map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    default:
      return state;
  }
};
