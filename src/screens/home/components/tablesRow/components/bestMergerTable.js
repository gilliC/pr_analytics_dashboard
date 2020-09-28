import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../../../../../common/table";
import data from "../../../../../../data.json";

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

const dataS = [
  createData("EllaC", 12),
  createData("EllaC", 12),
  createData("EllaC", 12),
];

const getTableData = () => {
  const tableDataRaw = data && data.best_merger;
  if (!tableDataRaw) {
    return null;
  }
  const dataIntoArray = Object.entries(tableDataRaw);
  return dataIntoArray.map(([id, value]) => {
    const object = { id, value };
    return object;
  });
};

export const BestMergerTable = (props) => {
  const classes = useStyles();
  const tableData = getTableData();
  console.log({ tableData });
  return (
    <Grid item md={4} className={classes.tableContainer}>
      <Table data={tableData} title="Best Merger" />
    </Grid>
  );
};
