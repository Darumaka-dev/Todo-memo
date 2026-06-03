import { memo } from "react";
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
  onDelete: (id: string) => void;
}

export const TodoList = memo(({ todos, onDelete }: TodoItemProps) => {
  return (
    <>
      <List>
        {todos.length !== 0 ? (
          todos.map((item) => (
            <ListItem key={item.id}>
              <TodoItem key={item.id} item={item} onDelete={onDelete} />
            </ListItem>
          ))
        ) : (
          <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
            Empty List
          </Typography>
        )}
      </List>
    </>
  );
});
