import { Grid, Box, Typography, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import watsapp from "assets/images/icons/watsapp.png";

const Process = () => {
  return (
    <Box display={"flex"} px={10} py={6}>
      <Box minWidth={"40%"} pr={6}>
        <Typography fontSize={"2.5rem"} fontWeight={600} mb={3}>
          OUR 4-STEP PROCESS
        </Typography>
        <Typography fontSize={"1.25rem"}>
          At Vertron, we follow a 4-step process to ensure your car receives
          unparalleled care and attention:
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
      <Box minWidth={"60%"}>
        <Grid container spacing={4} pt={2}>
          <Grid item xs={6} md={6}>
            <Box borderTop={1} borderColor={"#D8D8D8"}>
              <Typography fontSize={"1.5rem"} my={2}>
                01. Digital Diagnostic
              </Typography>
              <Typography fontSize={"1.125rem"} color="#555555">
                We begin with a comprehensive digital diagnostic using advanced
                software, analyzing every aspect of your vehicle's performance.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box borderTop={1} borderColor={"#D8D8D8"}>
              <Typography fontSize={"1.5rem"} my={2}>
                02. Physical Diagnostic
              </Typography>
              <Typography fontSize={"1.125rem"} color="#555555">
                Following the digital assessment, our experienced technicians
                conduct a thorough physical diagnostic, identifying any
                underlying issues or areas for improvement.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box borderTop={1} borderColor={"#D8D8D8"}>
              <Typography fontSize={"1.5rem"} my={2}>
                03. Service Proposal
              </Typography>
              <Typography fontSize={"1.125rem"} color="#555555">
                Based on our diagnostics, we provide a detailed service
                proposal, prioritizing tasks based on urgency and importance.
                This ensures transparency and allows you to make informed
                decisions about your car's maintenance.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box borderTop={1} borderColor={"#D8D8D8"}>
              <Typography fontSize={"1.5rem"} my={2}>
                04. Delivery
              </Typography>
              <Typography fontSize={"1.125rem"} color="#555555">
                Once the services are completed, we deliver your vehicle back to
                you, rejuvenated and ready to hit the road with optimal
                performance and reliability.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Process;
