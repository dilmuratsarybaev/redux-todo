import { combineReducers, createStore } from "redux";
import { authsReducer } from "./auth/authReducer";
import { todosReducer } from "./todos/Todos";

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authsReducer,
});

export const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Render", store.getState());
});
