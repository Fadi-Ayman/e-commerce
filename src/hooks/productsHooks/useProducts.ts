import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../servcies/productsApi";
import { ProductType } from "../../Types/ProductTypes";

function useProducts() {
  const {
    isLoading,
    isError,
    error,
    data: allProducts,
  } = useQuery<ProductType[]>({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 60, // 1 hour for Products
  });

  return { allProducts, isError, isLoading, error };
}

export default useProducts;
