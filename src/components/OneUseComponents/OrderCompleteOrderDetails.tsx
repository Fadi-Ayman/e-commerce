import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import { ApiOrders } from "../../Types/ApiTypes";


type OrderCompleteOrderDetailsType = Pick<ApiOrders,"id"|"date"|"totalPrice"|"paymentMethod"> 


function OrderCompleteOrderDetails({
  id,
  date,
  totalPrice,
  paymentMethod,}:OrderCompleteOrderDetailsType) {
  return (
    <Box sx={{ width: {xs:"80%",sm:"70%",md:"50%"} ,mt:"1rem" ,display:"flex",flexDirection:"column", gap:"1rem" ,mx:"auto"}}>

      {/* Order id */}
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between", flexDirection:{xs:"column",md:"row"} ,gap:"0.2"}}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.300",textAlign:"start",width:"100%" }}
        >
          Order Id
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.700",textAlign:"start",width:"100%" }}
        >
          {`#${id}`}
        </Typography>
      </Box>

            <Divider sx={{display:{xs:"block",md:"none"}}} />

      {/* Date */}
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between", flexDirection:{xs:"column",md:"row"} ,gap:"0.2"}}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.300",textAlign:"start",width:"100%" }}
        >
          Date
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.700" ,textAlign:"start",width:"100%"}}
        >
          {date}
        </Typography>
      </Box>

        <Divider sx={{display:{xs:"block",md:"none"}}} />

      {/* Total */}
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between", flexDirection:{xs:"column",md:"row"} ,gap:"0.2"}}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.300",textAlign:"start",width:"100%" }}
        >
          Total
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.700" ,textAlign:"start",width:"100%"}}
        >
          {formateCurrency(totalPrice)}
        </Typography>
      </Box>
        <Divider sx={{display:{xs:"block",md:"none"}}} />

      {/* Payment Method */}
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between", flexDirection:{xs:"column",md:"row"} ,gap:"0.2"}}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.300",textAlign:"start",width:"100%" ,textTransform:"capitalize" }}
        >
          Payment Method
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.700" ,textAlign:"start",width:"100%"}}
        >
          {paymentMethod.split("-").join(" ")}
          </Typography>
      </Box>

      <Divider sx={{display:{xs:"block",md:"none"}}} />

    </Box>
  );
}

export default OrderCompleteOrderDetails;
