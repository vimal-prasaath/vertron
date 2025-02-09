import { Box, Typography, Link, Button } from "@mui/material";
import source from "assets/images/banner/engine.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const Engine = () => {
  return (
    <Box
      display={"flex"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 10 }}
      alignItems={"center"}
      flexWrap={"wrap"}
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
          Roaring Engines Captivate Us & Smell of Interior Leathers Energize us
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          As luxury cars are our world, our passion reflects in our work.  Book
          now for personalised car care solutions tailored to your needs and
          experience peace of mind and exceptional service.
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

export default Engine;
