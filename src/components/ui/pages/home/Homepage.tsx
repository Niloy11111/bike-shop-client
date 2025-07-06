import Banner from "../../banner/Banner";
import Featured from "./featured/Featured";
import FrequentQuestion from "./FrequentQuestion";
import Testimonials from "./testimonials/Testimonials";
import WhyChoose from "./whyChoose/WhyChoose";

const Homepage = () => {
  return (
    <div className="">
      <Banner />
      <Featured />
      <WhyChoose />

      <Testimonials />
      <FrequentQuestion />
    </div>
  );
};

export default Homepage;
