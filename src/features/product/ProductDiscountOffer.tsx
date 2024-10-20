import { Box, Divider } from "@mui/material";
import { ProductType } from "../../Types/ProductTypes";
import DayTimer from "../../components/DayTimer";

type ProductDiscountOfferProps = Pick<
  ProductType,
  "discountEndDate" | "discount"
>;

function ProductDiscountOffer({
  discount,
  discountEndDate,
}: ProductDiscountOfferProps) {
  
  if(discount && discountEndDate)return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        mb: "0.5rem",
      }}
    >
      <DayTimer
        date={discountEndDate}
        boxColor="grey.200"
        labelsFontSizeInRem={1.1}
        timerLabel={"Discount Ends In"}
      />
      <Divider />
    </Box>
  )
  else return null;
}

export default ProductDiscountOffer;
