import { Badge } from "@mui/material";

type orderCompleteItemProps = {
  quantity: number;
  image: string;
  name: string;
};

function OrderCompleteItem({ quantity, image, name }: orderCompleteItemProps) {
  return (
    <Badge
      badgeContent={quantity}
      sx={{
        fontWeight: "bold",
        "& .MuiBadge-dot": {
          backgroundColor: "black",
        },
        "& .MuiBadge-standard": {
          backgroundColor: "black",
          color: "white",
          width: "28px",
          height: "28px",
          borderRadius:"100%",
          fontSize: "0.9rem",
          fontWeight:"bold"
        },
      }}
    >
      <img
        style={{
          width: "110px",
          height: "130px",
          objectFit: "fill",
          borderRadius: "5px",
        }}
        src={image}
        alt={name}
      />
    </Badge>
  );
}

export default OrderCompleteItem;
