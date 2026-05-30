import { useState, useEffect } from "react";
import { TodoInput } from "./components/TodoInput";
import { SearchInput } from "./components/SearchInput";
import { TodoList } from "./components/TodoList";

interface Todo {
  id: string;
  text: string;
}
function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoInput setTodos={setTodos} />
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        inputValue={inputValue}
      ></TodoList>
    </>
  );
}

export default App;
