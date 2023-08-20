import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function MediaCard({number,text}) {
  return (
    <Grid xs={12} sm={3} item>
      <Grid
        container
        justify="space-between"
        style={{
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#673AB7",
            maxWidth: 300,
            width: "100%",
            color: "white",
            textAlign: "center",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography sx={{}} gutterBottom variant="h4" component="div">
              {number}
            </Typography>
            <Typography style={{color:"white"}} variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
