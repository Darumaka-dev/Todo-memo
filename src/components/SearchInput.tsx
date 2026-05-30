import {
  memo,
  useCallback,
  type ChangeEvent,
  type SetStateAction,
  type Dispatch,
} from "react";
import TextField from "@mui/material/TextField";

interface TodoItemProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}
export const SearchInput = memo(
  ({ inputValue, setInputValue }: TodoItemProps) => {
    const updateInputValue = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
      },
      []
    );

    return (
      <>
        <TextField
          id="outlined-basic"
          label="Search Task"
          variant="outlined"
          onChange={updateInputValue}
          value={inputValue}
        />
      </>
    );
  }
);
