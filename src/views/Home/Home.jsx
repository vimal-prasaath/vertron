import { Box } from "@mui/material";
import { Banner, AutoService, CarConsultation, CarPart } from "./components";
import { TestimonialWrapper, BlogsWrapper, BookAppointment } from "components";

const Home = () => {
  return (
    <Box>
      <Banner />
      <AutoService />
      <CarConsultation />
      <BookAppointment />
      <CarPart />
      <TestimonialWrapper />
      <BlogsWrapper />
    </Box>
  );
};

export default Home;
