import { ToggleButton } from "@mui/material";
import styled from "@emotion/styled";

export const ToggleBtn = styled(ToggleButton)(({ theme }) => ({
  background: "#000000",
  borderRadius: "0.5rem !important",
  border: "none",
  marginBottom: "1rem",
  fontWeight: "bold",
  color: "#fff",
  justifyContent: "flex-start",
  transition: "all 0.2s ease",
  "&.Mui-selected,&.Mui-selected:hover,&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    transition: "all 0.2s ease",
  },
}));
