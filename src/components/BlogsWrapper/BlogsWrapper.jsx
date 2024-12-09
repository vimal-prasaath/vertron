import { Box, Typography, Button } from "@mui/material";
import Blog from "components/Blog";

const BlogsWrapper = () => {
  return (
    <Box px={{ xs: 4, md: 10 }} py={{ xs: 4, md: 6 }}>
      <Typography
        fontSize={{ xs: "2rem", md: "2.5rem" }}
        fontWeight={600}
        mb={4}
        textAlign={{ xs: "center", md: "left" }}
      >
        BLOGS
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
        <Box width={{ xs: "100%", md: "32%" }} mb={{ xs: 3, md: 0 }}>
          <Blog />
        </Box>
        <Box width={{ xs: "100%", md: "32%" }} mb={{ xs: 3, md: 0 }}>
          <Blog />
        </Box>
        <Box width={{ xs: "100%", md: "32%" }} mb={{ xs: 3, md: 0 }}>
          <Blog />
        </Box>
      </Box>
      <Box pt={4} textAlign={"center"}>
        <Button variant="contained">View ALL</Button>
      </Box>
    </Box>
  );
};

export default BlogsWrapper;
