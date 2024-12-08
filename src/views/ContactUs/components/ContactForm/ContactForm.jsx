import { Box, Typography, Grid, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box display={"flex"} px={10} py={6}>
      <Box width={"50%"} minWidth={"50%"} pr={2}>
        <Box width={"80%"}>
          <Typography
            fontSize={"2.5rem"}
            fontWeight={600}
            textTransform={"uppercase"}
          >
            All Good Things Start with a Simple Conversation
          </Typography>
          <Typography fontSize={"1.5rem"} color={"#555"} mt={2}>
            Reach out to us for personalized solutions and professional support.
            We're here to make car care hassle-free for you!
          </Typography>
        </Box>
      </Box>
      <Box width={"50%"} minWidth={"50%"} px={2}>
        <Box>
          <Grid container spacing={4} pt={2}>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                placeholder="Name"
                variant="filled"
                inputProps={{ name: "name" }}
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  sx: {
                    // background: "white",
                    px: 1,
                    "&:hover": {
                      //   background: "white",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                placeholder="Email Address"
                variant="filled"
                inputProps={{ name: "email" }}
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  sx: {
                    // background: "white",
                    px: 1,
                    "&:hover": {
                      //   background: "white",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                placeholder="Phone Number"
                variant="filled"
                inputProps={{ name: "phone" }}
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  sx: {
                    // background: "white",
                    px: 1,
                    "&:hover": {
                      //   background: "white",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                fullWidth
                placeholder="Car Model"
                variant="filled"
                inputProps={{ name: "carmodel" }}
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  sx: {
                    // background: "white",
                    px: 1,
                    "&:hover": {
                      //   background: "white",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                placeholder="Comments or Question"
                multiline
                rows={3}
                variant="filled"
                inputProps={{ name: "carmodel" }}
                InputProps={{
                  hiddenLabel: true,
                  disableUnderline: true,
                  sx: {
                    // background: "white",
                    px: 1,
                    "&:hover": {
                      //   background: "white",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button variant="contained" sx={{ minWidth: "12rem" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;