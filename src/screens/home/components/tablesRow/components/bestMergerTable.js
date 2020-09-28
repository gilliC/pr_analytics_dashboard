import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import orderBy from 'lodash/orderBy';
import { Table } from "../../../../../common/table";
import data from "../../../../../../data.json";
import { convertObjectToTableData } from "../../../../../logic/convertObjectToTableData";

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

const getTableData = () => {
  const mergersStats = data && data.best_merger;
  if (!mergersStats) {
    return null;
  }
  const tableData = convertObjectToTableData(mergersStats);
  console.log({tableData})
  return orderBy(tableData, 'value', 'desc');
};

export const BestMergerTable = (props) => {
  const classes = useStyles();
  const tableData = getTableData();
  return (
    <Grid item md={4} className={classes.tableContainer}>
      <Table data={tableData} title="Best Merger" />
    </Grid>
  );
};
