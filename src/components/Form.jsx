import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";

function Form() {
  const [age, setAge] = React.useState("Gender");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const theme = createTheme({
    typography: {
      fontFamily: ["DM Sans", "sans-serif"].join(","),
      
    },
  });
  const [status, setStatus] = React.useState("Marital Status");

  const handleChangestatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <div className="App">
      <Grid>
        <Card
          style={{ maxWidth: 1200, padding: "20px 5px", margin: "50px auto" }}
        >
          <CardContent>
          <ThemeProvider theme={theme}>
            <Typography style={{fontWeight:600, marginBottom:50}} gutterBottom variant="h5">
              Add Patient
            </Typography>
            </ThemeProvider>

            <section>
              <Grid container spacing={2}>
                <Grid xs={12} sm={3} item>
                  <TextField
                    size="small"
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={3} item>
                  <TextField
                    size="small"
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    size="small"
                    type="date"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  {/* <InputLabel id="demo-simple-select-label">Gender</InputLabel> */}
                  <Select
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={age}
                    label="Gender"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Gender"}>Gender</MenuItem>
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    type="number"
                    placeholder="Enter phone number"
                    label="Occupation"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    size="small"
                    type="number"
                    label="SSN"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={3}>
                  {/* <InputLabel id="demo-simple-select-label">Maritial Status</InputLabel> */}
                  <Select
                    fullWidth
                    size="small"
                    variant="outlined"
                    labelId="demo-simple-select-label"
                    value={status}
                    onChange={handleChangestatus}
                  >
                    <MenuItem value={"Marital Status"}>Marital Status</MenuItem>
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                  </Select>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField
                    size="small"
                    type="number"
                    label="Location Search"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} align="right">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </section>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Form;
