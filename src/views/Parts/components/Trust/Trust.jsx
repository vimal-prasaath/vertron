import { Box, Typography, Link, Button } from "@mui/material";
import source from "assets/images/banner/source.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const Trust = () => {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 10 }}
      alignItems={"center"}
      // bgcolor={"#ECEDEF"}
    >
      <Box
        minWidth={{ md: "50%", xs: "100%" }}
        width={{ md: "50%", xs: "100%" }}
        pr={{ xs: 0, md: 10 }}
      >
        <Typography
          fontSize={{ xs: "2rem", md: "2.5rem" }}
          fontWeight={600}
          textAlign={{ xs: "center", md: "left" }}
          textTransform={"uppercase"}
        >
          We Source Genuine Car Parts  from Across the Globe
        </Typography>
        <Typography fontSize={{ xs: "1.75rem", md: "2.25rem" }} my={2}>
          Doesn’t Matter If It Is Too Small Or Too Big To Be Shipped
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          Exclusive Luxury Car Parts are Rare - But Not Anymore! From Europe to
          America and beyond, our global sourcing network enables us to procure
          original luxury car parts from various regions worldwide. Whether it's
          a rare component or a specialized part, trust us to deliver
          authenticity and quality for your cherished vehicle.
        </Typography>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent={{ xs: "center", md: "flex-start" }}
          my={4}
        >
          <Button variant="contained" sx={{ minHeight: "2.5rem" }}>
            GET IN TOUCH
          </Button>

          <Link
            to="https://wa.me/918939854430"
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
                +91-89398 54430
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box
        minWidth={{ md: "50%", xs: "100%" }}
        width={{ md: "50%", xs: "100%" }}
        pr={{ xs: 0, md: 10 }}
        textAlign={{ xs: "center", md: "right" }}
      >
        <img src={source} alt="trust" width={"80%"} />
      </Box>
    </Box>
  );
};

export default Trust;
