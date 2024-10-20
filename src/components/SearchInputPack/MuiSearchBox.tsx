import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { theme } from "../../styles/theme";

// Define the props for the MuiSearchBox component

type SearchHeightProps = {
  Inputsize: "small" | "medium";
  inputValue: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  fontColor: "black" | "white";
};

// Define the type for search options
type SearchOption = {
  title: string;
  category: string;
};

// Create an array of search options
const SearchOptions: SearchOption[] = [
  { title: "The Shawshank Redemption", category: "Action" },
  { title: "The Godfather", category: "Action" },
  { title: "The Godfather: Part II", category: "Action" },
  { title: "The Dark Knight", category: "Adventure" },
  { title: "12 Angry Men", category: "Adventure" },
  { title: "Schindler's List", category: "Romantic" },
  { title: "Pulp Fiction", category: "Romantic" },
];

function MuiSearchBox({
  Inputsize = "medium",
  inputValue,
  onInputChange,
  fontColor = "black",
}: SearchHeightProps) {
  return (
    <Autocomplete
      options={SearchOptions.sort(
        (a, b) => a.category?.localeCompare(b.category || "") || 0
      )}
      groupBy={(option) => option.category || "Unknown"}
      getOptionLabel={(option) => option.title}
      size={Inputsize}
      onInputChange={(_, newInputValue) => {
        onInputChange(newInputValue);
      }}
      sx={{ width: "100%" }}
      inputValue={inputValue}
      autoHighlight
      disablePortal
      renderInput={(params) => (
        <TextField
          {...params}
          label="Products Search"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: fontColor, // Font color
              "& fieldset": {
                borderColor: `${theme.palette.grey[300]} !important`, // Border color without focused
              },
              "&.Mui-focused fieldset": {
                border: `${theme.palette.warning.dark} 1px solid !important`, // Focused border color
              },
              "& .MuiSvgIcon-root": {
                color: theme.palette.warning.dark, // x icon color
              },
              "&:hover fieldset": {
                borderColor: `${theme.palette.warning.dark} !important`, // Hover border color
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray", // Label color
              "&.Mui-focused": {
                color: `${theme.palette.warning.dark}  !important`, // Focused label color
              },
            },
          }}
        />
      )}
    />
  );
}

export default MuiSearchBox;
