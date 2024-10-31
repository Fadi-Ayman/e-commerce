import { Typography } from "@mui/material";
import { OrdersRowsType } from "../../Types/Types";
import { formateCurrency } from "../../utils/helpers";
import { theme } from "../../styles/theme";

function OrderItemRow({
  id,
  createdAt: date,
  status,
  totalPrice,
}: OrdersRowsType) {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {id}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {new Date(date).toDateString()}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
          bgcolor:
            status === "delevered"
              ? theme.palette.secondary.main
              : theme.palette.warning.main,
          padding: "0.2rem 0.5rem",
          borderRadius: "10px",
        }}
      >
        {status}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {formateCurrency(totalPrice)}
      </Typography>
    </>
  );
}

export default OrderItemRow;
