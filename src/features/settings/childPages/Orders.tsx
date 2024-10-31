import { Box, Typography } from "@mui/material";

import CustomTable from "../../../components/CustomTable/CustomTable";
import { OrderListHeaderLabels } from "../../../utils/constants";
import OrderItemRow from "../OrderItemRow";
import EmptyDataMsg from "../../../components/EmptyDataMsg";
import useOrders from "../../../hooks/ordersHooks/useOrders";
import PageLoadingSpinner from "../../../components/PageLoadingSpinner";

function Orders() {
  const { orders =[], isOrdersLoading, isOrdersError, ordersError } = useOrders();

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
        Orders History
      </Typography>

      {/* Orders Table */}
      {isOrdersLoading ? (
        <PageLoadingSpinner />
      ) : isOrdersError ? (
        <EmptyDataMsg message={ordersError?.message || ""} />
      ) : orders.length === 0 ? (
        <EmptyDataMsg message="No Orders Yet" />
      ) : (
        <CustomTable
          headerLabels={OrderListHeaderLabels}
          gap="1rem"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
        >
          {orders.map((order, i) => {
            return (
              <OrderItemRow
                key={i}
                id={order.id}
                createdAt={order.createdAt}
                status={order.status}
                totalPrice={order.totalPrice}
              />
            );
          })}
        </CustomTable>
      )}
    </Box>
  );
}

export default Orders;
