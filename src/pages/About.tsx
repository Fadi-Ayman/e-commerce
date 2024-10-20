import Newsletter from "../components/Newsletter";
import ServiceDescription from "../components/ServiceDescription";
import AboutImageConainer from "../features/about/AboutImageConainer";
import NewArrivalsEveryWeek from "../features/about/NewArrivalsEveryWeek";
import OurTeam from "../features/about/OurTeam";

function Products() {
  return (
    <>
      <AboutImageConainer />
      <ServiceDescription/>
      <NewArrivalsEveryWeek/>
      <OurTeam/>
      <Newsletter/>
    </>
  );
}

export default Products;
