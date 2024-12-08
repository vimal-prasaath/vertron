import { Box, Typography } from "@mui/material";
import img1 from "assets/images/banner/blog-min.png";
import blogImg from "assets/images/banner/blog-banner.png";
import { Link } from "react-router-dom";
import cal from "assets/images/icons/cal.png";
import { BookAppointmentCard } from "components";

const BlogItem = ({ img, title }) => {
  return (
    <Box display="flex" mb={3} alignItems={{ xs: "center", md: "center" }}>
      <Box
        pr={3}
        minWidth={"6.75rem"}
        maxWidth={"6.75rem"}
        textAlign={{ xs: "center", md: "start" }}
      >
        <img
          src={img}
          alt="blog"
          width="100%"
          height={"100%"}
          style={{ objectFit: "cover", borderRadius: "0.5rem" }}
        />
      </Box>
      <Box>
        <Typography fontSize="1.2rem" fontWeight="bold" mb={2}>
          {title}
        </Typography>
        <Typography fontSize="0.85rem" fontWeight="bold" mb={2} color={"#555"}>
          February 10, 2024
        </Typography>
      </Box>
    </Box>
  );
};

const MinizedBlogs = () => {
  return (
    <Box
      bgcolor="#f4f4f4"
      px={3}
      pb={0.25}
      borderRadius="1rem"
      mb={3}
      width={"100%"}
    >
      <Typography
        fontSize={"1.25rem"}
        textTransform="uppercase"
        borderBottom={1}
        mx={-3}
        px={3}
        py={2}
        borderColor="#e8e8e8"
        fontWeight={600}
        mb={3}
      >
        Recent post
      </Typography>

      <BlogItem img={img1} title="LOREM IPSUM IS A DUMMY TEXT" />

      <BlogItem img={img1} title="LOREM IPSUM IS A DUMMY TEXT" />
    </Box>
  );
};

const BlogDetails = () => {
  return (
    <Box width={"100%"}>
      <img src={blogImg} alt="blog" width={"100%"} />
      <Typography
        color={"#555"}
        fontSize={"1.125rem"}
        pt={2}
        display={"flex"}
        alignItems={"center"}
      >
        <img
          src={cal}
          alt="cal"
          width={"30px"}
          style={{ marginRight: "0.5rem" }}
        />{" "}
        November 20, 2020 — Vertron
      </Typography>
      <Typography
        fontSize={"2.5rem"}
        fontWeight={600}
        py={2}
        borderBottom={1}
        borderColor={"#efefef"}
      >
        Lorem IPSUM IS a dummy text
      </Typography>

      <Typography color={"#555"} fontSize={"1.125rem"} py={2}>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan Jorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
        dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit
        amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
        enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
      </Typography>
      <Typography color={"#555"} fontSize={"1.125rem"} py={2}>
        Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan Jorem ipsum dolor sit amet, consectetur adipiscing
        elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
        dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
        ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit
        amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
        enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
      </Typography>

      <Link>Read More...</Link>
    </Box>
  );
};

const BlogContent = () => {
  return (
    <Box display={"flex"} px={10} py={6}>
      <Box pr={3} flexGrow={1}>
        <BlogDetails />
      </Box>
      <Box minWidth={"27rem"} width={"27rem"}>
        <MinizedBlogs />
        <BookAppointmentCard />
      </Box>
    </Box>
  );
};

export default BlogContent;
