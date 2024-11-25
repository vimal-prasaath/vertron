import { Box, Typography } from "@mui/material";
import blog from "assets/images/icons/blog.png";

const Blog = () => {
  return (
    <Box>
      <Box maxWidth={"34rem"}>
        <img src={blog} alt="blog" width={"100%"} />
      </Box>
      <Box>
        <Typography fontSize={"1.5rem"} mb={2}>
          Lorem IPSUM
        </Typography>
        <Typography fontSize={"1.125rem"} mb={2}>
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan
        </Typography>
        <Typography fontSize={"1.125rem"}>
          November 20, 2020 — Vertron
        </Typography>
      </Box>
    </Box>
  );
};

export default Blog;
