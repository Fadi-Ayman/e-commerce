import { Box, Typography } from "@mui/material";
import CustomTable from "../../../components/CustomTable/CustomTable";
import { WishListHeaderLabels } from "../../../utils/constants";
import WishlistTableItem from "../WishlistTableItem";
import EmptyDataMsg from "../../../components/EmptyDataMsg";
import useWishlist from "../../../hooks/wishlistHooks/useWishlist";
import PageLoadingSpinner from "../../../components/PageLoadingSpinner";

function WishList() {
  const {
    wishlists = [],
    isWishlistsLoading,
    isWishlistError,
    wishlistError,
  } = useWishlist();

  if (isWishlistsLoading) return <PageLoadingSpinner />;

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
      {isWishlistError ? (
        <EmptyDataMsg
          message={wishlistError?.message || "Something went wrong"}
        />
      ) : wishlists.length === 0 ? (
        <EmptyDataMsg message="No WishLists Yet" />
      ) : (
        <CustomTable
          headerLabels={WishListHeaderLabels}
          gap="0.5rem"
          gridTemplateColumns="1fr 1fr 1fr 0.5fr"
        >
          {wishlists.map((product) => (
            <WishlistTableItem
              key={product.id}
              id={product.productId}
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
