import { Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

type CollectionLinkProps = {
  shopSearchParam: string;
};

function CollectionLink({ shopSearchParam }: CollectionLinkProps) {
  const navigate = useNavigate();

  return (
    <Typography
      onClick={() => navigate(`/shop?category=${shopSearchParam}`)}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        borderBottom: { xs: "1px solid black", md: "1.4px solid black" },
        width: "fit-content",
        paddingBottom: "0.01rem",
        cursor: "pointer",
        fontWeight: "500",
        fontSize: { xs: "0.85rem", md: "1rem" },
        "&:hover": {
          color: "orange",
          borderBottom: { xs: "1.5px solid orange", md: "2px solid orange" },
        },
      }}
      fontWeight={"400"}
    >
      <Typography
        fontWeight="inherit"
        fontSize={"inherit"}
        display={"inline-block"}
        component={"span"}
      >
        Collection
      </Typography>
      <ArrowForwardIcon
        sx={{
          width: "1rem",
          display: "inline-block",
          fontSize: "inherit",
        }}
      />
    </Typography>
  );
}

export default CollectionLink;
