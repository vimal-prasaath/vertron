import { Typography, Box } from "@mui/material";
import { Testimonial } from "components";

const TestimonialWrapper = () => {
  return (
    <Box px={10} py={6} bgcolor={"#ECEDEF"}>
      <Typography fontSize={"2.5rem"} fontWeight={600} mb={4}>
        TESTIMONIALS
      </Typography>
      <Box display={"flex"}>
        <Box width={"50%"} pr={4}>
          <Testimonial />
        </Box>
        <Box width={"50%"} pl={4}>
          <Testimonial />
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialWrapper;
