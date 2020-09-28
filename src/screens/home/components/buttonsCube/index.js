import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import  Grid  from "@material-ui/core/Grid";
import { RefreshButton } from "./components/refreshButton";
import { PickDateButton } from "./components/pickDateButton";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

});

export const ButtonsCube = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={12} sm={12} className={classes.container}>
      <RefreshButton />
      <PickDateButton />
    </Grid>
  );
};
