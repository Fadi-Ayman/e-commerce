import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { theme } from "../../styles/theme";
import { ProductType } from "../../Types/ProductTypes";

type SearchHeightProps = {
  Inputsize: "small" | "medium";
  inputValue: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
  fontColor: "black" | "white";
  allProducts: ProductType[];
  onSelectProduct: (id: string) => void; 
};

function MuiSearchBox({
  Inputsize = "medium",
  inputValue,
  onInputChange,
  fontColor = "black",
  allProducts,
  onSelectProduct, 
}: SearchHeightProps) {

  return (
    <Autocomplete
      options={allProducts.sort(
        (a, b) => a.category?.localeCompare(b.category || "") || 0
      )}
      groupBy={(option) => option.category.toUpperCase()}
      getOptionLabel={(option) => option.name}
      size={Inputsize}
      onInputChange={(_, newInputValue) => {
        onInputChange(newInputValue);
      }}
      onChange={(_, selectedProduct) => {
        if (selectedProduct) {
          onSelectProduct(selectedProduct.id); 
        }
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
              color: fontColor,
              "& fieldset": {
                borderColor: `${theme.palette.grey[300]} !important`,
              },
              "&.Mui-focused fieldset": {
                border: `${theme.palette.warning.dark} 1px solid !important`,
              },
              "& .MuiSvgIcon-root": {
                color: theme.palette.warning.dark,
              },
              "&:hover fieldset": {
                borderColor: `${theme.palette.warning.dark} !important`,
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
              "&.Mui-focused": {
                color: `${theme.palette.warning.dark}  !important`,
              },
            },
          }}
        />
      )}
    />
  );
}

export default MuiSearchBox;
