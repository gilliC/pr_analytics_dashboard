import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BestMergerTable } from "./components/bestMergerTable";
import { PrDurationTable } from "./components/prDurationTable";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  tableContainer: {
    margin: 30,
    marginLeft: 0,
  },
});

export const TablesRow = (props) => {
  const classes = useStyles();
  return (
    <Grid item md={12} className={classes.container}>
      <BestMergerTable />
      <PrDurationTable />
      <Grid item md={4} className={classes.tableContainer}>
      </Grid>
    </Grid>
  );
};
