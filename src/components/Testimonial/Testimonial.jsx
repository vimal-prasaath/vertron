import { Box, Typography } from "@mui/material";
import testimonial from "assets/images/icons/testimonial-img.png";

const Testimonial = () => {
  return (
    <Box display={"flex"} boxShadow={"0 0 20px 0 rgba(153,153,153,0.2)"}>
      <Box
        minWidth={"50%"}
        width={"50%"}
        p={4}
        display={"flex"}
        alignItems={"center"}
      >
        <Box>
          <Typography fontSize={"1.5rem"} fontWeight={600} mb={3}>
            Jaideep Singh
          </Typography>
          <Typography fontSize={"1.25rem"}>
            Fantastic service, superb punctuality. Availed their service twice
            and truly most satisfying. The response of coordinator is prompt and
            she was greatly supportive.
          </Typography>
        </Box>
      </Box>
      <Box minWidth={"50%"} width={"50%"}>
        <img src={testimonial} alt="consult" width={"100%"} />
      </Box>
    </Box>
  );
};

export default Testimonial;
