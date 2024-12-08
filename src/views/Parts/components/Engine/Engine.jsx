import { Box, Typography, Link, Button } from "@mui/material";
import source from "assets/images/banner/engine.png";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const Engine = () => {
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
          Roaring Engines Captivate Us & Smell of Interior Leathers Energize us
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          As luxury cars are our world, our passion reflects in our work.  Book
          now for personalised car care solutions tailored to your needs and
          experience peace of mind and exceptional service.
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

export default Engine;
