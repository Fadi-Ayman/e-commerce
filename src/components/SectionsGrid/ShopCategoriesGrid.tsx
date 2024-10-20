import { Box } from "@mui/material";
import CategoriesPaper from "../CategoriesPaper";

function ShopCategoriesGrid() {
  return (
    <Box
      sx={{
        height: "auto",
        width: { xs: "100%", sm: "90%", md: "95%" },
        mx: "auto",
        mt: { xs: "1.3rem", md: "1.6rem" },
        display: "grid",
        gridTemplateColumns: { xs: "repeat(1,1fr)", md: "repeat(2,1fr)" },
        gap: "1rem",
        maxHeight: { xs: "", md: "1100px" },
      }}
    >
      {/* Content */}
      <CategoriesPaper  categoryNameLowercase="electronics"  size="large" title="Electronics" image="/electronics.png" />

      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CategoriesPaper  categoryNameLowercase="clothes" size="small" title="Clothes" image="/clothes.png" />
        <CategoriesPaper categoryNameLowercase="shoes"  size="small" title="Shoes" image="/shoes.png" />
      </Box>
    </Box>
  );
}

export default ShopCategoriesGrid;
