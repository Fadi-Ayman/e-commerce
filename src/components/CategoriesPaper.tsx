import { Box, Paper, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import CollectionLink from "./OneUseComponents/CollectionLink";

type PaperProps = {
  size: "small" | "large";
  image: string;
  title: string;
  categoryNameLowercase: string;
};

function CategoriesPaper({
  size,
  image,
  title,
  categoryNameLowercase,
}: PaperProps) {
  if (size === "small") {
    return (
      <Paper
        sx={{
          bgcolor: theme.palette.grey[100],
          width: "100%",
          height: "100%",
          borderRadius: "6px",
          minHeight: { xs: "250px", lg: "" },
          maxHeight: { xs: "300px", md: "320px" },
          display: "grid",
          gridTemplateColumns: "repeat(20,1fr)",
          gridTemplateRows: "repeat(20,1fr)",
          boxShadow: "none",
          border: "1px solid rgb(224, 222, 222)",
        }}
      >
        <Box
          sx={{
            gridColumn: { xs: "10/-2", sm: "11/-3", md: "10/-2", lg: "11/-3" },
            gridRow: { xs: "4/-4", md: "3/-3" },
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            src={image}
            alt={title}
          />
        </Box>

        <Box
          sx={{
            gridColumn: "3/9",
            gridRow: { xs: "12/-3", md: "11/-2" },
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          <Typography
            fontSize="inherit"
            textTransform={"capitalize"}
            fontWeight={"500"}
          >
            {title}
          </Typography>

          <CollectionLink shopSearchParam={categoryNameLowercase} />
        </Box>
      </Paper>
    );
  }

  if (size === "large") {
    return (
      <Paper
        sx={{
          bgcolor: theme.palette.grey[100],
          width: "100%",
          height: "100%",
          borderRadius: "6px",
          minHeight: "350px",
          maxHeight: { xs: "300px", md: "660px" },
          display: "grid",
          gridTemplateColumns: "repeat(20,1fr)",
          gridTemplateRows: "repeat(20,1fr)",
          boxShadow: "none",
          border: "1px solid rgb(224, 222, 222)",
        }}
      >
        <Box
          sx={{
            gridColumn: { xs: "5/-5", sm: "6/-6", md: "4/-4", lg: "5/-5" },
            gridRow: { xs: "3/13", sm: "3/14", md: "3/15" },
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            src={image}
            alt={title}
          />
        </Box>

        <Box
          sx={{
            gridColumn: { xs: "3/-5", md: "4/-5" },
            gridRow: { xs: "15/-2", md: "16/-2" },
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          <Typography
            textTransform={"capitalize"}
            fontSize="inherit"
            fontWeight={"500"}
          >
            {title}
          </Typography>

          <CollectionLink shopSearchParam={categoryNameLowercase} />
        </Box>
      </Paper>
    );
  }
}

export default CategoriesPaper;
