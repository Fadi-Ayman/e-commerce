import { Paper } from "@mui/material";
import { productTag } from "../../Types/ProductTypes";
import { formateCurrency } from "../../utils/helpers";
import { theme } from "../../styles/theme";

type ProductBadgeProps<T> = {
  data: T;
};

function ProductBadge<T extends productTag | number>({
  data,
}: ProductBadgeProps<T>) {
  return (
    <Paper
      component={"span"}
      sx={{
        textTransform: "uppercase",
        width: "fit-content",
        boxShadow: "none",
        fontWeight: { xs: "bold", md: "600" },
        fontSize: { xs: "0.75rem", sm: "0.9rem", md: "0.8rem", lg: "0.85rem" },
        bgcolor:
          typeof data === "number" ? theme.palette.secondary.light : "white",
        display: "block",
        padding: "0.05rem 0.5rem",
        textDecoration: typeof data === "number" ? "line-through" : "none",
      }}
    >
      {typeof data === "number" ? formateCurrency(data) : data?.toUpperCase()}
    </Paper>
  );
}

export default ProductBadge;
