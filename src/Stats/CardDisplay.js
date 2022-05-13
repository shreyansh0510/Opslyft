import React, { useState, useEffect } from "react";
import "./CardDisplay.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

const url = "https://disease.sh/v3/covid-19/all";

const useStyles = makeStyles({
  root1: {
    color: "gray",
    backgroundColor: "white",
  },
  root2: {
    color: "gray",
    backgroundColor: "white",
  },
  root3: {
    color: "gray",
    backgroundColor: "white",
  },
});

function CardDisplay() {
  const [globe, SetGlobe] = useState({});

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        SetGlobe(data);
      });
  }, []);

  const classes = useStyles();

  return (
    <>
      <div className="cardDisplay">
        <div>
          <Card sx={{ minWidth: 320 }}>
            <CardContent className={classes.root1}>
              <Typography gutterBottom variant="h5" component="div">
                Active Cases
              </Typography>
              <Typography variant="h8" color="text.secondary">
                {globe.active}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ minWidth: 345 }}>
            <CardContent className={classes.root2}>
              <Typography gutterBottom variant="h5" component="div">
                Recovered Cases
              </Typography>
              <Typography variant="h8" color="text.secondary">
                {globe.recovered}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ minWidth: 345 }}>
            <CardContent className={classes.root3}>
              <Typography gutterBottom variant="h5" component="div">
                Total Deceased
              </Typography>
              <Typography variant="h8" color="text.secondary">
                {globe.deaths}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default CardDisplay;
