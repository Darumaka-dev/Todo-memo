import { useState, useEffect, useCallback, useMemo, type ChangeEvent } from "react";
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
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : generateTodos();
  });

  const handleAddTask = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), text }]);
    setSearchValue("");
  };
  
  const handleDeleteTask = useCallback((id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const filteredTodos: Todo[] = useMemo(
    () => todos.filter((todo) => todo.text.includes(searchValue)),
    [searchValue, todos]
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoInput onAdd={handleAddTask} />
      <SearchInput value={searchValue} onChange={handleSearchChange} />
      <TodoList todos={filteredTodos} onDelete={handleDeleteTask}></TodoList>
    </>
  );
}

export default App;
