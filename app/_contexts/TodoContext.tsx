"use client";

import { dummyTodos } from "@/lib/dummyTodo";
import { TodoType } from "@/lib/types";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};
type TodoContextType = {
  todos: TodoType[];
  setTodos: (todos: TodoType[]) => void;
};
const TodoContext = createContext({} as TodoContextType);

export const useTodo = () => {
  return useContext(TodoContext);
};

const TodoProvider = (props: Props) => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { children } = props;

  useEffect(() => {
    setTodos(dummyTodos);
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
