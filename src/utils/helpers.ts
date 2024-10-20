import { ProductType } from "../Types/ProductTypes";

function sortProducts(productsArray: ProductType[], sortChoice: string) {
  const productsCopy = [...productsArray];
  switch (sortChoice) {
    case "newest":
      return productsCopy;

    case "":
      return productsCopy;

    case "oldest":
      return productsCopy.reverse();

    case "asc":
      return productsCopy.sort((a, b) => a.price - b.price);

    case "desc":
      return productsCopy.sort((a, b) => b.price - a.price);

    case "rating":
      return productsCopy.sort((a, b) => b.ratingValue - a.ratingValue);

    case "ratingLow":
      return productsCopy.sort((a, b) => a.ratingValue - b.ratingValue);

    default:
      return productsCopy;
  }
}

export function FilterAndSortProducts(
  ProductsArray: ProductType[],
  categoryChoice: string,
  tagChoice: string,
  sortChoice: string
): ProductType[] {


  // if no filter or sort is selected return all products
  if (!categoryChoice && !tagChoice && !sortChoice) {
    return ProductsArray;
  }

  if (
    categoryChoice === "all" &&
    tagChoice === "all" &&
    sortChoice === "newest"
  ) {
    return ProductsArray;
  }



  // Filtering
  const isNoCategoryOrAll = !categoryChoice || categoryChoice === "all";
  const isNoTagOrAll =
    tagChoice === null || tagChoice === "all" || tagChoice === "";
  const isTagEqualUndefined = tagChoice === "no-tags";

  const filterdArray = ProductsArray.filter((product) => {
    return (
      (isNoCategoryOrAll ? product : product.category === categoryChoice) &&
      (isNoTagOrAll
        ? product
        : isTagEqualUndefined
        ? product.tag === undefined
        : product.tag === tagChoice)
    );
  });

  // if no sort is selected return filtered products only
  if(!sortChoice || sortChoice === "newest"){
    return filterdArray
  }
  
  // Sorting
  return sortProducts(filterdArray, sortChoice);
}

export function formateCurrency(price: number): string {
  const result = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return result;
}

export function calculateTotalPages(
  totalProductsCount: number,
  productsPerPage: number
): number {
  // Ensure productsPerPage is greater than 0 to avoid division by zero
  if (productsPerPage <= 0) {
    throw new Error("productsPerPage must be greater than 0");
  }

  // Calculate total pages and round up to handle any remaining products
  return Math.ceil(totalProductsCount / productsPerPage);
}
