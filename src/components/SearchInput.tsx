import TextField, { type TextFieldProps } from "@mui/material/TextField";

export const SearchInput = (props: TextFieldProps) => {
  return (
      <TextField
        id="outlined-basic"
        label="Search Task"
        variant="outlined"
        {...props}
      />
  );
};
