import { Typography, Box } from "@mui/material";
import { Testimonial } from "components";

const TestimonialWrapper = () => {
  return (
    <Box px={{ xs: 4, md: 10 }} py={{ xs: 4, md: 6 }} bgcolor={"#ECEDEF"}>
      <Typography
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight={600}
        mb={8}
        textAlign={{ xs: "center", md: "left" }}
      >
        TESTIMONIALS
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"}>
        <Box
          width={{ md: "50%", xs: "100%" }}
          pr={{ xs: 0, md: 4 }}
          mb={{ xs: 6, md: 0 }}
        >
          <Testimonial />
        </Box>
        <Box width={{ md: "50%", xs: "100%" }} pl={{ xs: 0, md: 4 }}>
          <Testimonial />
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialWrapper;
