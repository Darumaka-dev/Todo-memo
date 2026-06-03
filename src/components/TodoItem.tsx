import { memo, useEffect } from "react";
import Button from "@mui/material/Button";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  item: Todo;
  onDelete: (id: string) => void;
}
export const TodoItem = memo(({ item, onDelete }: TodoItemProps) => {
  useEffect(() => {
    console.log("Rerender");
  });

  return (
    <>
      {item.text}{" "}
      <Button
        color="error"
        sx={{ ml: 2, fontSize: 10 }}
        variant="outlined"
        onClick={() => onDelete(item.id)}
      >
        delete
      </Button>
    </>
  );
});
