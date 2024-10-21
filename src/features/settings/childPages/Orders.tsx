import { Box, Typography } from "@mui/material";

import CustomTable from "../../../components/CustomTable/CustomTable";
import { OrderListHeaderLabels } from "../../../utils/constants";
import { DummyordersRows } from "../../../utils/dummyData";
import OrderItemRow from "../OrderItemRow";
import EmptyDataMsg from "../../../components/EmptyDataMsg";

function Orders() {
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
      {DummyordersRows.length === 0 ? (
        <EmptyDataMsg message="No Orders Yet" />
      ) : (
        <CustomTable
          headerLabels={OrderListHeaderLabels}
          gap="0.5rem"
          gridTemplateColumns="1fr 1fr 1fr 1fr"
        >
          {DummyordersRows.map((order,i) => {
            return (
              <OrderItemRow
                key={i}
                id={order.id}
                date={order.date}
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
