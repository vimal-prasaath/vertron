import { Box, Typography, Button } from "@mui/material";
import service from "assets/images/icons/service.png";
import source from "assets/images/icons/sour.svg";
import rep from "assets/images/icons/rep.svg";
import assess from "assets/images/icons/asses.svg";
import diag from "assets/images/icons/diag.svg";

const services = [
  {
    title: "Periodic Services",
    description: "Essential Routine Car Care for Peak Performance",
    img: service,
  },
  {
    title: "Car Diagnostics",
    description: "Precision Analysis leading to a pinpoint solution",
    img: diag,
  },
  {
    title: "Car Assessment",
    description: "Assessing Your Car’s General Health, Viability & Life",
    img: assess,
  },
  {
    title: "Car Repairs",
    description: "Holistic Solutions for Your Car’s Needs",
    img: rep,
  },
  {
    title: "Sourcing Parts",
    description: "Rare Car Parts Sourced from Across the Globe",
    img: source,
  },
];

const AutoServiceCard = ({ title, description, img }) => {
  return (
    <Box width={{ md: "50%", xs: "100%", lg: "20%" }} p={1}>
      <Box
        boxShadow={"0 0 20px 0 rgba(153,153,153,0.2)"}
        p={3}
        textAlign={{ xs: "center", md: "left" }}
      >
        <img src={img} alt="service" width="80" />
        <Typography
          fontSize={"1.5rem"}
          my={2}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          {title}
        </Typography>
        <Typography fontSize={"1.25rem"} my={2}>
          {description}
        </Typography>
        <Typography mb={2}>Know More</Typography>
        <Button variant="contained" sx={{ minHeight: "2.5rem" }}>
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

const AutoService = () => {
  return (
    <Box px={{ md: 10, xs: 4 }} py={{ md: 6, xs: 4 }}>
      <Typography
        fontSize={{ md: "2.5rem", xs: "2rem" }}
        fontWeight={600}
        mb={4}
        textAlign={{ md: "left", xs: "center" }}
      >
        FULL RANGE AUTO SERVICES
      </Typography>
      <Box
        display={"flex"}
        // flexDirection={{ xs: "column", md: "row" }}
        flexWrap={"wrap"}
      >
        {services?.map(({ title, description, img }) => (
          <AutoServiceCard
            key={title}
            title={title}
            description={description}
            img={img}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AutoService;
