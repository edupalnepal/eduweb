import Header from "../Components/Homepage/Header";
import Hero from "../Components/Homepage/Hero";
import OurCourses from "../Components/Homepage/OurCourses";
import Testimonials from "../Components/Homepage/Testimonials";
import CTA from "../Components/Homepage/CTA";
import Footer from "../Components/Homepage/Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <OurCourses />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default Homepage;
