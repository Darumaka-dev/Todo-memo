import {
  memo,
  useCallback,
  type SetStateAction,
  type Dispatch,
} from "react";
import Button from "@mui/material/Button";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  item: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoItem = memo(({ item, todos, setTodos }: TodoItemProps) => {
  const deleteTask = useCallback((id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <>
      {item.text}{" "}
      <Button
        color="error"
        sx={{ ml: 2, fontSize: 10 }}
        variant="outlined"
        onClick={() => deleteTask(item.id)}
      >
        delete
      </Button>
    </>
  );
});
