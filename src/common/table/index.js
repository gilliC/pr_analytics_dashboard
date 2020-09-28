import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUITable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    marginRight: 15,
  },
  title: {
    fontFamily: "HKGroteskSemi",
    fontSize: 18,
    padding: 20,
  },
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("EllaC", 12),
  createData("EllaC", 12),
  createData("EllaC", 12),
];
const getRow = (row) => {
  return (
    <TableRow key={row.name}>
      <TableCell scope="row"> {row.name} </TableCell>
      <TableCell>{row.calories}</TableCell>
    </TableRow>
  );
};
export default function Table() {
  const classes = useStyles();

  const rowComponents = rows.map(getRow);
  return (
    <TableContainer component={Paper}>
      <MUITable className={classes.table} size="small">
        <TableHead>
          <TableRow>
              <h3>Best Merger</h3>
          </TableRow>
            
          <TableRow>
            <TableCell className={classes.title}>Name</TableCell>
            <TableCell className={classes.title}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rowComponents}</TableBody>
      </MUITable>
    </TableContainer>
  );
}
