import { ProductType } from "../Types/ProductTypes"
import { DummyProducts } from "../utils/dummyData"


function useProducts() {
  // Here React Query Functionality will be added insted of dummy Data

  const allProducts : ProductType[] = DummyProducts
  
  return { allProducts }
}

export default useProducts
