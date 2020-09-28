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

export const TablesRow = (props) => {
  const classes = useStyles();
  return (
    <Grid md={12} className={classes.container}>
      <Grid md={4} className={classes.tableContainer}>
        <Table data={data} title="Best Merger" />
      </Grid>
      <Grid md={4} className={classes.tableContainer}>
        <Table data={data} title="PR Duration" />
      </Grid>
      <Grid md={4} className={classes.tableContainer}>
        <Table data={data} title="Best Merger" />
      </Grid>
    </Grid>
  );
};
