import { Box, Typography } from "@mui/material";
import maintaince from "assets/images/banner/general.png";

const GeneralCheckup = () => {
  return (
    <Box>
      <Typography
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight={600}
        textTransform={"uppercase"}
        mt={{ xs: 3, md: 0 }}
      >
        General Checkup
      </Typography>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Get Clarity on Your Vehicles Health
      </Typography>
      <Box fontSize={"1.25rem"} color="#555555">
        <Typography fontSize={"1.25rem"} lineHeight={1.75}>
          Whether you’re contemplating a second-hand purchase or ensuring your
          current vehicle is in peak condition, our expert technicians are ready
          to deliver a comprehensive assessment. From engine performance to
          fluid levels, we leave no stone unturned, providing you with a
          detailed report that empowers you to make informed decisions.
        </Typography>

        <Box py={3} height={{ md: "35rem", xs: "auto" }}>
          <img
            src={maintaince}
            alt="maintaince"
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Box>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Your Personalized Vehicle Assessment Report
      </Typography>
      <Box fontSize={"1.25rem"} color="#555555">
        <Typography fontSize={"1.25rem"} lineHeight={1.75}>
          Our Vehicle Assessment Report is your car’s health report card,
          featuring:
        </Typography>
        <Box component={"ul"} fontSize={"1.25rem"} lineHeight={1.75}>
          <Typography component={"li"} fontSize={"1.25rem"} lineHeight={1.75}>
            <Typography
              component={"span"}
              fontWeight={600}
              fontSize={"1.25rem"}
              lineHeight={1.75}
            >
              Test Drive Insights:
            </Typography>{" "}
            Real-world performance data gathered during a hands-on test drive.
          </Typography>
          <Typography component={"li"} fontSize={"1.25rem"} lineHeight={1.75}>
            <Typography
              component={"span"}
              fontWeight={600}
              fontSize={"1.25rem"}
              lineHeight={1.75}
            >
              Priority Issues:
            </Typography>
            Identified problems ranked by urgency for immediate focus.
          </Typography>
          <Typography component={"li"} fontSize={"1.25rem"} lineHeight={1.75}>
            <Typography
              component={"span"}
              fontWeight={600}
              fontSize={"1.25rem"}
              lineHeight={1.75}
            >
              Root Cause Breakdown:
            </Typography>
            Analysis of each issue with clear solutions and necessary parts.
          </Typography>
          <Typography component={"li"} fontSize={"1.25rem"} lineHeight={1.75}>
            <Typography
              component={"span"}
              fontWeight={600}
              fontSize={"1.25rem"}
              lineHeight={1.75}
            >
              Future Planning:
            </Typography>
            Identification of potential concerns to help you stay proactive.
          </Typography>
        </Box>
      </Box>
      <Typography
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Our Approach Sets Us Apart
      </Typography>
      <Typography fontSize={"1.25rem"} color="#555555" lineHeight={1.75}>
        Our skilled technicians combine expertise with cutting-edge diagnostic
        tools, enabling them to pinpoint issues that others might miss. With our
        proactive approach, we don’t just identify problems; we provide
        actionable insights to help you extend your vehicle’s life and save on
        future repair costs.
      </Typography>
    </Box>
  );
};

export default GeneralCheckup;
