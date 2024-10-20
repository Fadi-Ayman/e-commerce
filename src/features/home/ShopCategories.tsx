import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import ShopCategoriesGrid from "../../components/SectionsGrid/ShopCategoriesGrid";

function ShopCategories() {
  const navigate = useNavigate();

  return (
    <Box
      component={"section"}
      sx={{
        width: { xs: "85%", sm: "86%", md: "88%", lg: "85%" },
        mx: "auto",
        mt: { xs: "2.5rem", md: "3rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {/* Section Title  */}
      <Box
        display={"flex"}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
        width={"100%"}
      >
        <Typography
          variant="h3"
          component={"h3"}
          fontSize={{ xs: "2.3rem", sm: "2.4rem", md: "2.5rem", lg: "2.8rem" }}
          sx={{
            fontWeight: "500",
            mx: { xs: "auto", md: "0" },
          }}
        >
          Shop Categories
        </Typography>

        <Button
          onClick={() => {
            navigate("/shop");
          }}
          sx={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: theme.palette.grey[300],
            fontSize: { md: "1.8rem", lg: "2rem" },
            display: { xs: "none", md: "inline-block" },
            fontWeight: "500",
            cursor: "pointer",
            transitionDuration: "0.3s",
            mx: { xs: "auto", md: "0" },
            "&:hover": {
              color: theme.palette.grey[700],
              textDecoration: "underline",
            },
          }}
        >
          More
        </Button>
      </Box>

      {/* Section Content */}
      <ShopCategoriesGrid />
    </Box>
  );
}

export default ShopCategories;
