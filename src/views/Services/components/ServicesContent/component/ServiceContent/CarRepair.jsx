import { Box, Typography } from "@mui/material";
import maintaince from "assets/images/banner/general.png";

const CarRepair = () => {
  return (
    <Box>
      <Typography
        fontSize={{ xs: "2rem", md: "3rem" }}
        fontWeight={600}
        textTransform={"uppercase"}
        mt={{ xs: 3, md: 0 }}
      >
        Car Repairs
      </Typography>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Your One-Stop Solution for All Car Repairs
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          At Vertron, we handle everything from minor tweaks to major repairs,
          ensuring your vehicle runs smoothly. Our comprehensive services cover
          denting, painting, AC repair, engine diagnostics, brake repairs,
          suspension adjustments, and more. Whatever the concern, our skilled
          technicians have the expertise to address it efficiently.
        </Typography>

        <Box py={3}>
          <img src={maintaince} alt="maintaince" width={"100%"} />
        </Box>
      </Box>
      <Typography
        // fontSize={"3rem"}
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Expert Technicians Who Continue to Upskill Themselves
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          Our team is not only experienced but also undergoes regular training
          to stay current with the latest repair techniques and technologies.
          This commitment to continuous learning ensures that your vehicle
          receives the best care possible, no matter the issue. You can count on
          us for precise diagnostics and reliable repairs.
        </Typography>
      </Box>
      <Typography
        // fontSize={"3rem"}
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Repair Only What Is Absolutely Needed
      </Typography>
      <Typography fontSize={"1.5rem"} color="#555555" lineHeight={1.75}>
        We believe in addressing only what’s necessary, prioritizing repairs
        based on urgency and importance. Our technicians will clearly outline
        which issues need immediate attention and which can wait, putting you in
        control of the decisions. This ensures you only pay for what truly
        matters, helping you manage costs without compromising safety or
        performance.
      </Typography>
    </Box>
  );
};

export default CarRepair;
