import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  createNewOrder,
  getUserOrders,
  getUserLastOrder,
} from "../../servcies/ordersApi"; // Adjust path as needed
import { ApiOrders } from "../../Types/ApiTypes";

function useOrders() {
  const queryClient = useQueryClient();

  // Fetch User's Orders
  const {
    data: orders,
    isError: isOrdersError,
    error: ordersError,
    isLoading: isOrdersLoading,
  } = useQuery<ApiOrders[]>({
    queryKey: ["userOrders"],
    queryFn: getUserOrders,
  });

  // Fetch Last User Order
  const {
    data: lastOrder,
    isError: isLastOrderError,
    error: lastOrderError,
    isLoading: isLastOrderLoading,
  } = useQuery<ApiOrders | null>({
    queryKey: ["userLastOrder"],
    queryFn: getUserLastOrder,
  });

  // Add New Order
  const { mutate: addOrder, isPending: addOrderLoading } = useMutation({
    mutationFn: createNewOrder,
    onSuccess: () => {
      toast.success("Order successfully created.");
      queryClient.invalidateQueries({ queryKey: ["userOrders"] });
      queryClient.invalidateQueries({ queryKey: ["userLastOrder"] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        toast.error(error.message || "Failed to create order.");
      } else {
        toast.error("An unknown error occurred while creating order.");
      }
    },
    
    onMutate: () => {
      toast.loading("Creating Order...", { id: "creatingOrder" });
    },
    onSettled: () => {
      toast.dismiss("creatingOrder");
    },
  });

  return {
    // Fetch User's Orders
    orders,
    isOrdersLoading,
    isOrdersError,
    ordersError,
    // Fetch Last Order
    lastOrder,
    isLastOrderLoading,
    isLastOrderError,
    lastOrderError,
    // Add New Order
    addOrder,
    addOrderLoading,
  };
}

export default useOrders;
