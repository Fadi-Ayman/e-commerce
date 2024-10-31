import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import { ApiOrders } from "../../Types/ApiTypes";

type OrderCompleteOrderDetailsType = Pick<
  ApiOrders,
  "id" | "createdAt" | "totalPrice" | "paymentMethod"
>;

function OrderCompleteOrderDetails({
  id,
  createdAt: date,
  totalPrice,
  paymentMethod,
}: OrderCompleteOrderDetailsType) {
  return (
    <Box
      sx={{
        width: { xs: "80%", sm: "70%", md: "55%" },
        mt: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mx: "auto",
      }}
    >
      {/* Order id */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column",
          gap: "0.3rem",
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.300",
            textAlign: "start",
            width: "100%",
          }}
        >
          Order Id
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.700",
            textAlign: "start",
            width: "100%",
            textWrap:{xs:"wrap",md:"nowrap"},
          }}
        >
          {id}
        </Typography>
      </Box>

      <Divider  />

      {/* Date */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column",
          gap: "0.3rem",
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.300",
            textAlign: "start",
            width: "100%",
          }}
        >
          Date
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.700",
            textAlign: "start",
            width: "100%",
            textWrap:"nowrap"
          }}
        >
          {date}
        </Typography>
      </Box>

      <Divider  />

      {/* Total */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column",
          gap: "0.3rem",
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.300",
            textAlign: "start",
            width: "100%",
          }}
        >
          Total
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.700",
            textAlign: "start",
            width: "100%",
            textWrap:"nowrap"
          }}
        >
          {formateCurrency(totalPrice)}
        </Typography>
      </Box>
      <Divider  />

      {/* Payment Method */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column",
          gap: "0.3rem",
        }}
      >
        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.300",
            textAlign: "start",
            width: "100%",
            textTransform: "capitalize",
          }}
        >
          Payment Method
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{
            fontWeight: "500",
            color: "grey.700",
            textAlign: "start",
            width: "100%",
            textWrap:"nowrap"
          }}
        >
          {paymentMethod.split("-").join(" ")}
        </Typography>
      </Box>

      <Divider  />
    </Box>
  );
}

export default OrderCompleteOrderDetails;
