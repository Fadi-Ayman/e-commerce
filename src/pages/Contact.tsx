import Newsletter from "../components/Newsletter";
import ServiceDescription from "../components/ServiceDescription";
import ContactAboutCard from "../features/contact/ContactAboutCard";
import ContactSection from "../features/contact/ContactSection";
import ContactTopText from "../features/contact/ContactTopText";

function Contact() {
  return (
    <>
      <ContactTopText />
      <ContactAboutCard />
      <ContactSection />
      <ServiceDescription/>
      <Newsletter/>
    </>
  );
}

export default Contact;
