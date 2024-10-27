import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../servcies/productsApi";

function useSingleProduct(productId: string) {
  const {
    isLoading,
    isError,
    error,
    data: product,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });

  return { product, isError, isLoading, error };
}

export default useSingleProduct;
