import { Box, Typography, Button } from "@mui/material";
import Blog from "components/Blog";

const BlogsWrapper = () => {
  return (
    <Box px={10} py={6}>
      <Typography fontSize={"2.5rem"} fontWeight={600} mb={4}>
        BLOGS
      </Typography>
      <Box display={"flex"} gap={2}>
        <Box flexGrow={1}>
          <Blog />
        </Box>
        <Box flexGrow={1}>
          <Blog />
        </Box>
        <Box flexGrow={1}>
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
