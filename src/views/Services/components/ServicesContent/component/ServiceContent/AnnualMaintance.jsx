import { Box, Typography } from "@mui/material";
import maintaince from "assets/images/banner/maintainance.png";

const AnnualMaintenance = () => {
  return (
    <Box>
      <Typography
        fontSize={{ xs: "2rem", md: "3rem" }}
        fontWeight={600}
        textTransform={"uppercase"}
        mt={{ xs: 3, md: 0 }}
      >
        Annual Maintenance
      </Typography>
      <Typography
        // fontSize={"2rem"}
        fontSize={{ xs: "1.75rem", md: "2rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Keep Your Car Running Smooth – Service Every 12,000 km or 365 Days
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          Prevent unexpected breakdowns with timely annual maintenance. Our
          service ensures optimal vehicle performance, covering all the
          essentials:
        </Typography>
        <Box component={"ul"} fontSize={"1.5rem"} lineHeight={1.75}>
          <Typography component={"li"} fontSize={"1.5rem"} lineHeight={1.75}>
            Replacement of filters, fluids, and wipers
          </Typography>
          <Typography component={"li"} fontSize={"1.5rem"} lineHeight={1.75}>
            Realignment for a smoother ride
          </Typography>
          <Typography component={"li"} fontSize={"1.5rem"} lineHeight={1.75}>
            Thorough inspection of key wear-and-tear components (brake pads,
            belts, etc.)
          </Typography>
        </Box>
        <Box py={3}>
          <img src={maintaince} alt="maintaince" width={"100%"} />
        </Box>
      </Box>
      <Typography
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Tailored Repairs with Genuine Parts – Nothing More, Nothing Less
      </Typography>
      <Box fontSize={"1.5rem"} color="#555555">
        <Typography fontSize={"1.5rem"} lineHeight={1.75}>
          We believe in personalized care for your car. No unnecessary add-ons —
          just the exact repairs it needs for peak performance. Our certified
          mechanics use only top-tier brands for long-lasting results:
        </Typography>
        <Typography fontSize={"1.5rem"} my={1}>
          <Typography
            component={"span"}
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={1.75}
          >
            Filters:{" "}
          </Typography>{" "}
          Mann & Hummel, Mahle
        </Typography>
        <Typography fontSize={"1.5rem"} my={1}>
          <Typography
            component={"span"}
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={1.75}
          >
            Fluids:{" "}
          </Typography>
          Fuchs, Addinol, Shell
        </Typography>
        <Typography fontSize={"1.5rem"} my={1}>
          <Typography
            component={"span"}
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={1.75}
          >
            Brake Pads:{" "}
          </Typography>
          EBC, ATE, Hella Pagid
        </Typography>
        <Typography fontSize={"1.5rem"} my={1}>
          <Typography
            component={"span"}
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={1.75}
          >
            Belts:{" "}
          </Typography>{" "}
          Continental, INA
        </Typography>
        <Typography fontSize={"1.5rem"} my={1}>
          <Typography
            component={"span"}
            fontWeight={600}
            fontSize={"1.5rem"}
            lineHeight={1.75}
          >
            Wipers & Plugs:{" "}
          </Typography>{" "}
          Bosch & All repairs include a 1-year service warranty
        </Typography>
      </Box>
      <Typography
        fontSize={{ xs: "1.75rem", md: "3rem" }}
        my={2}
        fontWeight={600}
        textTransform={"uppercase"}
      >
        Better Than Authorized Service Centers – No Upselling, No Hidden Costs
      </Typography>
      <Typography fontSize={"1.5rem"} color="#555555" lineHeight={1.75}>
        We outperform Authorized Service Centers (ASCs) by offering honest,
        transparent service without upselling unnecessary parts. You’ll receive
        competitive pricing, accurate diagnoses, and full control over repair
        decisions.
      </Typography>
    </Box>
  );
};

export default AnnualMaintenance;
