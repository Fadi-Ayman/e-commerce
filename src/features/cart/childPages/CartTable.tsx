import { Box } from "@mui/material";
import { DummyProducts } from "../../../utils/dummyData";
import EmptyDataMsg from "../../../components/EmptyDataMsg";
import CustomTable from "../../../components/CustomTable/CustomTable";
import CartItem from "../CartItem";
import { CartListHeaderTables } from "../../../utils/constants";
import CartSummary from "../CartSummary.tsx";

function CartTable() {
  const isEmptyCart = DummyProducts.length === 0;

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "90%" },
        height: "100%",
        display: "grid",
        mx: "auto",
        gridTemplateColumns: {
          xs: "1fr",
          md: isEmptyCart ? "1fr" : "1.8fr 1fr",
          lg: isEmptyCart ? "1fr" : "2.4fr 1fr",
        },
        gap: "1.5rem",
        padding: { xs: "1rem 0.5rem", sm: "1rem 2rem" },
      }}
    >
      {isEmptyCart ? (
        <EmptyDataMsg withGoBack message="Your Cart is Empty" />
      ) : (
        <>
          <CustomTable
            headerLabels={CartListHeaderTables}
            borderColor="grey.200"
            gap="0.5rem"
            gridTemplateColumns="1fr 1.2fr 1fr 1fr 0.5fr"
          >
            {DummyProducts.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
            ))}
          </CustomTable>
        </>
      )}

      {isEmptyCart ? null : <CartSummary />}
    </Box>
  );
}

export default CartTable;