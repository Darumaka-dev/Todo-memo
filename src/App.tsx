import { useState, useEffect, useCallback, useMemo } from "react";
import { TodoInput } from "./components/TodoInput";
import { SearchInput } from "./components/SearchInput";
import { TodoList } from "./components/TodoList";

interface Todo {
  id: string;
  text: string;
}

function generateTodos() {
  return Array.from({ length: 5000 }, (_, index) => ({
    id: String(index),
    text: `Todo ${index + 1}`,
  }));
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    // const data = localStorage.getItem("todos");
    // return data ? JSON.parse(data) : [];
    return generateTodos();
  });

  const deleteTask = useCallback((id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleClickAdd = (text) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), text }]);
    setSearchValue("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered: Todo[] = useMemo(
    () => todos.filter((todo) => todo.text.includes(searchValue)),
    [searchValue, todos]
  );
  return (
    <>
      <TodoInput onAdd={handleClickAdd} />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={filtered} onDelete={deleteTask}></TodoList>
    </>
  );
}

export default App;
