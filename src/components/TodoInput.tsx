import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState, type ChangeEvent } from "react";

interface TodoItemProps {
  onAdd: (title: string) => void;
}

export const TodoInput = ({ onAdd }: TodoItemProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    setValue(data);
  };

  return (
    <Stack spacing={2} direction="row" sx={{ mb: 3 }}>
      <TextField
        value={value}
        onChange={handleChange}
        label="Task name"
        variant="outlined"
      />
      <Button variant="contained" onClick={() => onAdd(value)}>
        Add
      </Button>
    </Stack>
  );
};
