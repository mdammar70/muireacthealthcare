import React from "react";
import MediaCard from "./Cards";
import { Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import Table from "./Table";

const Dashboard = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      
    },
  });
  return (
    <div style={{ padding: "5px 5px" }}>
      <ThemeProvider theme={theme}>
        <Typography
          sx={{ marginBottom: 4 }}
          style={{ fontWeight: 600 , color: "#330e62" }}
          variant="h5"
          gutterBottom
        >
          Welcome to kaizen Digital
        </Typography>
      </ThemeProvider>
      <Grid
        container
        spacing={1}
        sx={{
          paddingBottom: 10,
        }}
      >
        <MediaCard number={35} text={"Total Patients"} />
        <MediaCard number={23} text={"Approval Pending"} />
        <MediaCard number={11} text={"Approved"} />
        <MediaCard number={1} text={"Rejected"} />
      </Grid>
      <Table />
    </div>
  );
};

export default Dashboard;
