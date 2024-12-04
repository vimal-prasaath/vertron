import { Banner, Trust, Process, Brands } from "./components";
import { TestimonialWrapper, BlogsWrapper, BookAppointment } from "components";
import whyVet from "assets/images/banner/whyvet.png";

const AboutUs = () => {
  return (
    <>
      <Banner />
      <Trust />
      <img src={whyVet} alt="whyVet" width={"100%"} />
      <Process />
      <BookAppointment />
      <Brands />
      <TestimonialWrapper />
      <BlogsWrapper />
    </>
  );
};

export default AboutUs;
