import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";

function OrderCompleteOrderDetails() {
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
          {`#${123123}`}
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
          {new Date().toDateString()}
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
          {formateCurrency(123123)}
        </Typography>
      </Box>
        <Divider sx={{display:{xs:"block",md:"none"}}} />

      {/* Payment Method */}
      <Box sx={{width:"100%",display:"flex",justifyContent:"space-between", flexDirection:{xs:"column",md:"row"} ,gap:"0.2"}}>
        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.300",textAlign:"start",width:"100%" }}
        >
          Payment Method
        </Typography>

        <Typography
          variant="body1"
          component={"p"}
          sx={{ fontWeight: "500", color: "grey.700" ,textAlign:"start",width:"100%"}}
        >
          {"Pay On Delevery"}
        </Typography>
      </Box>

      <Divider sx={{display:{xs:"block",md:"none"}}} />

    </Box>
  );
}

export default OrderCompleteOrderDetails;
