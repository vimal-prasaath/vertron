import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const BannerContainer = styled(Box)(({ image }) => ({
  background: `url(${image}) no-repeat`,
  backgroundPositionX: "center",
  backgroundSize: "cover",
  minHeight: "25.5rem",
  boxShadow: "0 -2px 15px 0 rgba(153, 153, 153, 0.2)",
  backgroundPositionY: "bottom",
}));
