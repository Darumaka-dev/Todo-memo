import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, memo, type ChangeEvent, type SetStateAction, type Dispatch} from "react";

interface Todo {
  id: string;
  text: string;
}

interface TodoItemProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoInput = memo(({ setTodos }: TodoItemProps) => {
  const [inputValue, setInputValue] = useState("");

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    setInputValue(data);
  };

  const handleClickAdd = () => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: inputValue },
    ]);
    setInputValue("");
  };

  return (
    <Stack spacing={2} direction="row" sx={{ marginBottom: "20px" }}>
      <TextField
        id="outlined-basic"
        label="Task name"
        variant="outlined"
        onChange={updateInput}
        value={inputValue}
      />
      <Button variant="contained" onClick={handleClickAdd}>
        Add
      </Button>
    </Stack>
  );
});
