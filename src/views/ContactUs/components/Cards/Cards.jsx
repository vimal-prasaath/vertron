import { Box, Typography, Grid } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const AddressCard = () => {
  return (
    <Box bgcolor={"#000000"} color={"white"} p={3} height={"100%"}>
      <Typography
        width={"100%"}
        fontWeight={600}
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        textTransform={"uppercase"}
        mb={2}
      >
        Address
      </Typography>
      <Box display={"flex"} alignItems={"flex-start"}>
        <LocationOnOutlinedIcon />
        <Typography fontSize={"1.125rem"} ml={1}>
          D-9, 4th St, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058
        </Typography>
      </Box>
    </Box>
  );
};

const TimingCard = () => {
  return (
    <Box bgcolor={"#000000"} color={"white"} p={3} height={"100%"}>
      <Typography
        width={"100%"}
        fontWeight={600}
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        textTransform={"uppercase"}
        mb={2}
      >
        OPEN HOURS
      </Typography>
      <Typography
        fontSize={"1.125rem"}
        display={"flex"}
        justifyContent={"space-between"}
        mb={1}
      >
        <Typography component={"span"} fontSize={"1.125rem"}>
          Monday - Saturday
        </Typography>

        <Typography component={"span"} fontSize={"1.125rem"}>
          8 am - 8 pm
        </Typography>
      </Typography>
      <Typography
        fontSize={"1.125rem"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography component={"span"} fontSize={"1.125rem"}>
          Sunday
        </Typography>

        <Typography component={"span"} fontSize={"1.125rem"}>
          Closed
        </Typography>
      </Typography>
    </Box>
  );
};

const ContactCard = () => {
  return (
    <Box bgcolor={"#000000"} color={"white"} p={3} height={"100%"}>
      <Typography
        width={"100%"}
        fontWeight={600}
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        textTransform={"uppercase"}
        mb={2}
      >
        Contact Us
      </Typography>
      <Typography
        fontSize={"1.125rem"}
        mb={1}
        display={"flex"}
        alignItems={"center"}
      >
        <LocalPhoneOutlinedIcon sx={{ mr: 1 }} /> +91-89398 54430
      </Typography>
      <Typography fontSize={"1.125rem"} display={"flex"} alignItems={"center"}>
        <EmailOutlinedIcon sx={{ mr: 1 }} /> info@vertronmotor.com
      </Typography>
    </Box>
  );
};

const Cards = () => {
  return (
    <Box px={{ xs: 4, md: 10 }} py={{ xs: 4, md: 6 }}>
      <Grid container spacing={4} pt={2}>
        <Grid item xs={12} md={4}>
          <AddressCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <TimingCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cards;
