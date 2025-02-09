import { Box, Typography } from "@mui/material";
import testimonial from "assets/images/icons/testimonial-img.png";
import testQuote from "assets/images/icons/testimonial.png";

const Testimonial = () => {
  return (
    <Box
      display={"flex"}
      boxShadow={"0 0 20px 0 rgba(153,153,153,0.2)"}
      bgcolor={"white"}
      position={"relative"}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        width={{ xs: "3rem", md: "4.375rem" }}
        position={"absolute"}
        left={0}
        top="-2rem"
      >
        <img src={testQuote} alt="quote" width={"100%"} />
      </Box>
      <Box
        minWidth={{ xs: "100%", md: "50%" }}
        width={{ xs: "100%", md: "50%" }}
        p={4}
        display={"flex"}
        alignItems={"center"}
      >
        <Box>
          <Typography fontSize={"1.5rem"} fontWeight={600} mb={3}>
            Jaideep Singh
          </Typography>
          <Typography fontSize={"1.25rem"} letterSpacing={"1px"}>
            Fantastic service, superb punctuality. Availed their service twice
            and truly most satisfying. The response of coordinator is prompt and
            she was greatly supportive.
          </Typography>
        </Box>
      </Box>
      <Box
        minWidth={{ xs: "100%", md: "50%" }}
        width={{ xs: "100%", md: "50%" }}
        height={{ xs: "15rem", md: "auto" }}
      >
        <img
          src={testimonial}
          alt="consult"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Testimonial;
