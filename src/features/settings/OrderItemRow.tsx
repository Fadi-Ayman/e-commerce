import { Typography } from "@mui/material";
import { OrdersRowsType } from "../../Types/Types";
import { formateCurrency } from "../../utils/helpers";

function OrderItemRow({ id, createdAt :date, status, totalPrice }: OrdersRowsType) {
  return (
    <>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {`#${id}`}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {date}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "16px" },
          fontWeight: "500",
          textAlign: "center",
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
