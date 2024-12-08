import { Banner, Trust, Engine, BookAppointment } from "./components";
import { BlogsWrapper, TestimonialWrapper } from "components";
import partner from "assets/images/banner/partner.png";
import { Box } from "@mui/material";

const Parts = () => {
  return (
    <>
      <Banner />
      <Trust />
      <Box bgcolor={"black"}>
        <img src={partner} alt="whyVet" width={"100%"} />
      </Box>
      <Engine />
      <BookAppointment />
      <TestimonialWrapper />
      <BlogsWrapper />
    </>
  );
};

export default Parts;
