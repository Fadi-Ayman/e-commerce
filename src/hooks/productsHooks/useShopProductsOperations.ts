import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  calculateTotalPages,
  FilterAndSortProducts,
} from "../../utils/helpers";
import { ProductType } from "../../Types/ProductTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useProducts from "./useProducts";

function useShopProductsOperations() {
  const { allProducts, isError, error, isLoading } = useProducts();

  const Products: ProductType[] | undefined = allProducts;

  const [paginationPage, setPaginationPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({});

  const MaxProductsNumberPerPage = useSelector(
    (state: RootState) => state.ProductsGrid.MaxProductsNumber
  );

  useEffect(() => {
    const pageParam = searchParams.get("page");
    if (pageParam) {
      setPaginationPage(Number(pageParam));
    }
  }, [searchParams]);

  // PrePared Version of Array , sorted And Filtered
  const choosenCategory: string = searchParams.get("category") || "all";
  const choosenTag: string = searchParams.get("tag") || "all";
  const choosenSort: string = searchParams.get("sort-by") || "newest";

  const preparedProductsArray = FilterAndSortProducts(
    //+++This is Main Array that will Sort And Filter +++
    Products, // <==
    //+++This is Main Array that will Sort And Filter +++
    choosenCategory,
    choosenTag,
    choosenSort
  );

  const totalPages = calculateTotalPages(
    preparedProductsArray?.length || 0,
    MaxProductsNumberPerPage
  );

  // Handling Pagenation Event
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPaginationPage(value);
    searchParams.set("page", value.toString());
    setSearchParams(searchParams);
    window.scrollTo(0, 580);
  };

  const startIndex = (paginationPage - 1) * MaxProductsNumberPerPage;
  const endIndex = startIndex + MaxProductsNumberPerPage;
  const currentProducts = preparedProductsArray?.slice(startIndex, endIndex);

  return {
    currentProducts,
    totalPages,
    paginationPage,
    handlePageChange,
    isError,
    isLoading,
    error,
  };
}

export default useShopProductsOperations;
