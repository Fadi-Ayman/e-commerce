import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterAndSortType } from "../../Types/Types";

type sortTypeProps = {
  sortOptionsArray: FilterAndSortType[];
};
export default function Sort({ sortOptionsArray }: sortTypeProps) {
  const [sortValue, setSortValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleChange = (event: SelectChangeEvent) => {
    setSortValue(event.target.value);
    searchParams.set("page","1")
    searchParams.set("sort-by", event.target.value);
    setSearchParams(searchParams);
  };

  return (
    <FormControl
      sx={{ minWidth: 130, width: { xs: "100%", md: "200px" } }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">{"Sort By"}</InputLabel>

      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={searchParams.get("sort-by") || sortValue}
        label={"Sort By"}
        onChange={handleChange}
        sx={{ borderRadius: "8px", textTransform: "capitalize" }}
      >
        {sortOptionsArray.map((option, i) => (
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
