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
    <Box display={"flex"} px={10} py={6}>
      <Box>
        <ServiceList view={view} setView={setView} />
        <Box px={3}>
          <BookAppointmentCard />
        </Box>
      </Box>
      <Box px={3}>{Content ? <Content /> : null}</Box>
    </Box>
  );
};

export default ServiceContent;
