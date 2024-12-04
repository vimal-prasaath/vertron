import { Box, Typography } from "@mui/material";
import maintaince from "assets/images/banner/general.png";

const CarDiagnostics = () => {
  return (
    <Box>
      <Typography
        fontSize={"3rem"}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Car Diagnostics
      </Typography>
      <Typography
        fontSize={"2rem"}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        No Problem Is Too Complex for Us
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          From mysterious electrical faults to sudden power loss and stalling,
          Vertron specializes in solving even the most elusive issues in
          European vehicles. Our comprehensive diagnostic process leaves no
          stone unturned, ensuring we identify the root cause quickly and
          accurately. Whether it’s an odd noise or a no-start problem, we get to
          the bottom of it, saving you time and hassle.
        </Typography>
        <Box py={3}>
          <img src={maintaince} alt="maintaince" width={"100%"} />
        </Box>
      </Box>
      <Typography
        fontSize={"3rem"}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Collaborative Diagnosis – A Unique Team Approach
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          At Vertron, our team doesn’t work in silos. We bring together experts
          for a collaborative huddle where we discuss your vehicle’s symptoms
          and explore every possible cause. By separating primary symptoms from
          secondary ones and systematically eliminating false leads, we ensure
          our diagnosis is pinpoint accurate and targeted at the real issue.
        </Typography>
      </Box>
      <Box py={3}>
        <img src={maintaince} alt="maintaince" width={"100%"} />
      </Box>
      <Typography
        fontSize={"3rem"}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Transparent Process – You’re in Control of the Fix
      </Typography>
      <Typography fontSize={"1.5rem"} color="#555555" lineHeight={1.75}>
        Once the root problem is identified, we not only provide a detailed
        resolution plan but also handle the repair with high-quality parts.
        After the repair, we rigorously test your vehicle to make sure
        everything is running perfectly before handing it back to you. Your car
        gets fixed right the first time, every time.
      </Typography>
    </Box>
  );
};

export default CarDiagnostics;
