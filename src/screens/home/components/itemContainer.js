import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 10,
    },
  },
}));

export const ItemContainer = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={2} sm={6} className={classes.container}>
      {props.children}
    </Grid>
  );
};
