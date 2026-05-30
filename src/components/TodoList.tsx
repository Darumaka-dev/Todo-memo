import { memo, useMemo, type SetStateAction, type Dispatch } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { ListItem } from "@mui/material";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  inputValue: string;
}

export const TodoList = memo(
  ({ todos, setTodos, inputValue }: TodoItemProps) => {
    const filtered: Todo[] = useMemo(
      () => todos.filter((todo) => todo.text.includes(inputValue)),
      [inputValue, todos]
    );

    return (
      <>
        <List>
          {todos.length !== 0 ? (
            (inputValue ? filtered : todos).map((item) => (
              <ListItem key={item.id}>
                <TodoItem
                  key={item.id}
                  item={item}
                  todos={todos}
                  setTodos={setTodos}
                />
              </ListItem>
            ))
          ) : (
            <Typography
              variant="caption"
              gutterBottom
              sx={{ display: "block" }}
            >
              Empty List
            </Typography>
          )}
        </List>
      </>
    );
  }
);
