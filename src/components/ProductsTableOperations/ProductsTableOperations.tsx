import { Box } from "@mui/material";
import Filter from "./Filter";
import Sort from "./Sort";
import {
  CategoryFilterOptions,
  ProductsTagOptions,
  sortOptionsArray,
} from "../../utils/constants";
import GridTableControls from "./GridTableControls";

function ProductsTableOperations() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: "1rem", sm: "2rem" },
        padding: "1rem",
        borderBottom: "1.5px solid ",
        borderColor: "grey.200",
      }}
    >
      {/* Filtering Section */}
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "start",

          display: "flex",
          gap: "1rem",
        }}
      >
        {/* Category Filter */}
        <Filter
          inputLabel="Category"
          filterOptionsArray={CategoryFilterOptions}
        />
        {/* Price Filter */}
        <Filter inputLabel="Tag" filterOptionsArray={ProductsTagOptions} />
      </Box>

      {/* Sorting Section */}
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "row",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Sort sortOptionsArray={sortOptionsArray} />
        <GridTableControls />
      </Box>
    </Box>
  );
}

export default ProductsTableOperations;
