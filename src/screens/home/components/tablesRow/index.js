import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../../../../common/table";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  tableContainer: {
      margin: 15,
      marginLeft: 0
  }
});

export const TablesRow = (props) => {
  const classes = useStyles();
  return (
    <Grid md={12} className={classes.container}>
      <Grid md={4} className={classes.tableContainer}><Table /></Grid>
      <Grid md={4} className={classes.tableContainer}><Table /></Grid>
      <Grid md={4} className={classes.tableContainer}><Table /></Grid>
    </Grid>
  );
};
