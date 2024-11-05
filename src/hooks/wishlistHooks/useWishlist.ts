import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  getUserWishlists,
  addNewWishListItem,
  deleteWishListItem,
} from "../../servcies/wishlistsApi"; // Fixed typo from 'servcies' to 'services'
import { ApiWishlistItem } from "../../Types/ApiTypes";

function useWishlist() {
  const queryClient = useQueryClient();

  // Fetch User's Wishlists
  const {
    data: wishlists,
    isError: isWishlistError,
    error: wishlistError,
    isLoading: isWishlistsLoading,
  } = useQuery<ApiWishlistItem[]>({
    queryKey: ["userWishlists"],
    queryFn: getUserWishlists,
  });

  // Add New Wishlist Item
  const { mutate: addItemToWishlist, isPending: addItemLoading } = useMutation({
    mutationFn: addNewWishListItem,
    onSuccess: (_, variables) => {
      toast.success(`Item ( ${variables.name} ) added to wishlist.`);
      queryClient.invalidateQueries({
        queryKey: ["userWishlists"],
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message || "Failed to add item to wishlist.");
      } else {
        toast.error("An unknown error occurred while adding item to wishlist.");
      }
    },
    onMutate: () => {
      toast.loading("Adding Item ...", { id: "addToWishlist" });
    },
    onSettled: () => {
      toast.dismiss("addToWishlist");
    },
  });

  // Delete Wishlist Item
  const { mutate: deleteWishlistItem, isPending: deleteItemLoading } =
    useMutation({
      mutationFn: deleteWishListItem,
      onSuccess: () => {
        toast.success(`Item  removed to wishlist.`);
        queryClient.invalidateQueries({
          queryKey: ["userWishlists"],
        });
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(error.message || "Failed to remove item from wishlist.");
        } else {
          toast.error(
            "An unknown error occurred while removing item from wishlist."
          );
        }
      },
      onMutate: () => {
        toast.loading("removing item ...", { id: "remove-image" });
      },
      onSettled: () => {
        toast.dismiss("remove-image");
      },
    });

  return {
    // Fetch User's Wishlists
    wishlists,
    isWishlistsLoading,
    isWishlistError,
    wishlistError,
    // Add New Wishlist Item
    addItemToWishlist,
    addItemLoading,
    // Delete Wishlist Item
    deleteWishlistItem,
    deleteItemLoading,
  };
}

export default useWishlist;
