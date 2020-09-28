import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../../../../../common/table";
import dataS from "../../../../../../data.json";

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

function createData(name, calories) {
  return { name, calories };
}

const data = [
  createData("EllaC", 12),
  createData("EllaC", 12),
  createData("EllaC", 12),
];

export const PrDurationTable = (props) => {
  const classes = useStyles();
  console.log({dataS})
  return (
    <Grid item md={4} className={classes.tableContainer}>
        <Table data={data} title="PR Duration" />
    </Grid>
  );
};
