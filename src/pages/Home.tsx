import PartnerLogosMarquee from "../features/home/PartnerLogosMarquee";
import HomeImageConainer from "../features/home/HomeImageConainer";
import NewArrival from "../features/home/NewArrivals";
import ShopCategories from "../features/home/ShopCategories";
import BestSeller from "../features/home/BestSeller";
import Promotion from "../features/home/Promotion";
import NewsFeed from "../features/home/NewsFeed";
import Newsletter from "../components/Newsletter";
import ServiceDescription from "../components/ServiceDescription";


function Home() {
  return (
    <>
      <HomeImageConainer />
      <PartnerLogosMarquee />
      <NewArrival />
      <ShopCategories />
      <BestSeller />
      <Promotion />
      <ServiceDescription />
      <NewsFeed />
      <Newsletter />
    </>
  );
}

export default Home;
