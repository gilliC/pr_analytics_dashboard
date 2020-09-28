import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Table from "../../../../../common/table";
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
  const durationStats = data && data.merged_to_duration;
  if (!durationStats) {
    return null;
  }
  const tableData = convertObjectToTableData(durationStats);
  return tableData.map(({id, value}) => {
    return { id, value: value.toFixed(2)}
  });
};

export const PrDurationTable = (props) => {
  const classes = useStyles();
  const tableData = getTableData();
  return (
    <Grid item md={4} className={classes.tableContainer}>
        <Table data={tableData} title="PR Duration" />
    </Grid>
  );
};
