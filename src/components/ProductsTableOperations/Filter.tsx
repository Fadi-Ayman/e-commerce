import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FilterAndSortType } from "../../Types/Types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type FilterTypeProps = {
  inputLabel: string;
  filterOptionsArray: FilterAndSortType[];
};

export default function Filter({
  inputLabel,
  filterOptionsArray,
}: FilterTypeProps) {
  const [filterValue, setFilterValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleChange = (event: SelectChangeEvent) => {
    setFilterValue(event.target.value);
    searchParams.set("page","1")
    searchParams.set(inputLabel.toLowerCase(), event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: { xs: "100%", md: "130px" } }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">{inputLabel}</InputLabel>

      <Select
        sx={{ borderRadius: "8px", textTransform: "capitalize" }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={searchParams.get(inputLabel.toLowerCase()) || filterValue}
        label={inputLabel}
        onChange={handleChange}
      >
        {filterOptionsArray.map((option, i) => (
          <MenuItem
            key={i}
            value={option.value}
            sx={{ textTransform: "capitalize" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
