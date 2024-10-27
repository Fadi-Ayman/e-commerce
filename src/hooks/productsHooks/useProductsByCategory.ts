import { useQuery } from "@tanstack/react-query";
import { getProducsByCategory } from "../../servcies/productsApi";

function useProductsByCategory(category: string) {
  const {
    isLoading,
    isError,
    error,
    data: suggestedProducts,
  } = useQuery({
    queryKey: ["product", category],
    queryFn: () => getProducsByCategory(category),
  });

  return { suggestedProducts, isError, isLoading, error };
}

export default useProductsByCategory;
