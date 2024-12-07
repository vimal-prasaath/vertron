import { Box, Typography, Link, Button } from "@mui/material";
import source from "assets/images/banner/source.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const Trust = () => {
  return (
    <Box
      display={"flex"}
      px={10}
      alignItems={"center"}
      // bgcolor={"#ECEDEF"}
      py={10}
    >
      <Box minWidth={"50%"} width={"50%"} pr={10}>
        <Typography
          fontSize={"2.5rem"}
          fontWeight={600}
          textTransform={"uppercase"}
        >
          We Source Genuine Car Parts  from Across the Globe
        </Typography>
        <Typography fontSize={"2.25rem"} my={2}>
          Doesn’t Matter If It Is Too Small Or Too Big To Be Shipped
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Exclusive Luxury Car Parts are Rare - But Not Anymore! From Europe to
          America and beyond, our global sourcing network enables us to procure
          original luxury car parts from various regions worldwide. Whether it's
          a rare component or a specialized part, trust us to deliver
          authenticity and quality for your cherished vehicle.
        </Typography>
        <Box display="flex" alignItems={"center"} my={4}>
          <Button variant="contained">GET IN TOUCH</Button>

          <Link
            to="https://wa.me/917695957120"
            target="_blank"
            display="flex"
            ml={4}
            alignItems="center"
            component={RouterLink}
            sx={{ textDecoration: "none" }}
            color={"common.black"}
          >
            <img src={watsapp} width="40px" alt="watsapp" />
            <Box
              display="flex"
              flexDirection="column"
              m={1.5}
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <Typography variant="subtitle2">Need Help?</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                +91 76959 57120
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box minWidth={"50%"} width={"50%"} pr={10} textAlign={"right"}>
        <img src={source} alt="trust" width={"80%"} />
      </Box>
    </Box>
  );
};

export default Trust;
