import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, type ChangeEvent } from "react";

interface TodoItemProps {
  onAdd: (title: string) => void;
}

export const TodoInput = ({ onAdd }: TodoItemProps) => {
  const [inputValue, setInputValue] = useState("");

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    setInputValue(data);
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
      <Button variant="contained" onClick={() => onAdd(inputValue)}>
        Add
      </Button>
    </Stack>
  );
};
