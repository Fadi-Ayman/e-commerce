import PartnerLogosMarquee from "../features/home/PartnerLogosMarquee";
import HomeImageConainer from "../features/home/HomeImageConainer";
import NewArrival from "../features/home/NewArrivals";
import ShopCategories from "../features/home/ShopCategories";
import BestSeller from "../features/home/BestSeller";
import Promotion from "../features/home/Promotion";
import NewsFeed from "../features/home/NewsFeed";
import Newsletter from "../components/Newsletter";
import ServiceDescription from "../components/ServiceDescription";
import useProducts from "../hooks/productsHooks/useProducts";
import { ProductType } from "../Types/ProductTypes";
import {
  bestSellerMaxCount,
  productsCarouselMaxCount,
} from "../utils/constants";
import { useMemo } from "react";

function Home() {
  const { allProducts, isError, isLoading, error } = useProducts();

  const TopRatingProducts = useMemo(() => {
    return allProducts
      ?.sort((a: ProductType, b: ProductType) => b.ratingValue - a.ratingValue)
      ?.slice(0, bestSellerMaxCount);
  }, [allProducts]);

  const newProducts = useMemo(() => {
    return allProducts
      ?.filter((product: ProductType) => product.tag === "new")
      ?.slice(0, productsCarouselMaxCount);
  }, [allProducts]);

  return (
    <>
      <HomeImageConainer />
      <PartnerLogosMarquee />
      <NewArrival
        newProducts={newProducts}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      <ShopCategories />
      <BestSeller
        TopRatingProducts={TopRatingProducts}
        isLoading={isLoading}
        isError={isError}
        error={error}
      />
      <Promotion />
      <ServiceDescription />
      <NewsFeed />
      <Newsletter />
    </>
  );
}

export default Home;
