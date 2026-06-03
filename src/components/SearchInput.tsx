import {
  useCallback,
  type ChangeEvent,
  type SetStateAction,
  type Dispatch,
} from "react";
import TextField from "@mui/material/TextField";

interface TodoItemProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}
export const SearchInput = ({ searchValue, setSearchValue }: TodoItemProps) => {
  const updateInputValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  }, []);

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search Task"
        variant="outlined"
        onChange={updateInputValue}
        value={searchValue}
      />
    </>
  );
};
