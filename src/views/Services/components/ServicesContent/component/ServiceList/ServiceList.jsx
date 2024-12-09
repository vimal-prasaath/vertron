import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Typography } from "@mui/material";
import { ToggleBtn } from "./ToggleBtn.styles";

const ServiceList = ({ view, setView }) => {
  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  return (
    <Box
      maxWidth={{ md: "24.5rem", xs: "100%" }}
      minWidth={{ md: "24.5rem", xs: "100%" }}
      px={{ md: 3, xs: 0 }}
      borderRadius="1rem"
    >
      <Typography
        textTransform="uppercase"
        pb={2}
        borderColor="#e8e8e8"
        fontWeight={600}
        fontSize={{ xs: "2rem", md: "3rem" }}
      >
        SERVICE LIST
      </Typography>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        fullWidth
        sx={{ pt: 2 }}
      >
        <ToggleBtn value={"annualMaintenance"}>Annual Maintenance</ToggleBtn>
        <ToggleBtn value={"diagnostics"}>Car Diagnostics</ToggleBtn>{" "}
        <ToggleBtn value={"checkup"}>General Checkup</ToggleBtn>{" "}
        <ToggleBtn value={"carRepairs"}>Car Repairs</ToggleBtn>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ServiceList;
