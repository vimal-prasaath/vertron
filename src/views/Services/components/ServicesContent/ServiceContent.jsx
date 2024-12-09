import { Box } from "@mui/material";
import {
  ServiceList,
  AnnualMaintaince,
  CarDiagnostics,
  GeneralCheckup,
  CarRepair,
} from "./component";
import { useState } from "react";
import { BookAppointmentCard } from "components";
const ServiceContent = () => {
  const [view, setView] = useState("annualMaintenance");

  let Content = null;

  switch (view) {
    case "annualMaintenance":
      Content = AnnualMaintaince;
      break;
    case "diagnostics":
      Content = CarDiagnostics;
      break;
    case "checkup":
      Content = GeneralCheckup;
      break;
    case "carRepairs":
      Content = CarRepair;
      break;
    default:
      Content = null;
      break;
  }

  return (
    <Box
      display={"flex"}
      px={{ xs: 4, md: 10 }}
      py={{ xs: 4, md: 6 }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box>
        <ServiceList view={view} setView={setView} />
        <Box px={{ md: 3, xs: 0 }}>
          <BookAppointmentCard />
        </Box>
      </Box>
      <Box px={{ md: 3, xs: 0 }}>{Content ? <Content /> : null}</Box>
    </Box>
  );
};

export default ServiceContent;
