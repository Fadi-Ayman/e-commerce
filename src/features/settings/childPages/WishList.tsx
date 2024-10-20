import { Box, Typography } from "@mui/material";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { WishListHeaderLabels } from "../../../utils/constants";
import { DummyProducts } from "../../../utils/dummyData";
import WishlistTableItem from "../WishlistTableItem";
import EmptyDataMsg from "../../../components/EmptyDataMsg";

function WishList() {
  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "start",
      }}
    >
      <Typography
        variant="h6"
        component={"h6"}
        fontWeight={"500"}
        sx={{ textAlign: "start", mb: "0.5rem", width: "100%" }}
      >
        Your WishList
      </Typography>

      {/* WishList Table */}
      {DummyProducts.length === 0 ? (
        <EmptyDataMsg message="No WishLists Yet" />
      ) : (
        <CustomTable
          headerLabels={WishListHeaderLabels}
          gap="0.5rem"
          gridTemplateColumns="1fr 1fr 1fr 0.5fr"
        >
          {DummyProducts.map((product) => (
            <WishlistTableItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </CustomTable>
      )}
    </Box>
  );
}

export default WishList;
