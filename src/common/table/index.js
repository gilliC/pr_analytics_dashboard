import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUITable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TableTitle } from "./components/title";
import { FONT_SEMI, TEXT_BLACK } from "../../consts";
import Row from "./components/row";

const useStyles = makeStyles({
  rowHeader: {
    fontFamily: FONT_SEMI,
    color: TEXT_BLACK,
    fontSize: 18,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});



export const Table = ({ data, title, columns }) => {
  const classes = useStyles();

  const rowComponents = data.map(row=> <Row key={row.id} {...row} />);
  return (
    <TableContainer className={classes.table} component={Paper}>
      <MUITable  size="small">
        <TableHead>
          <TableTitle title={title}/>
          <TableRow>
            <TableCell className={classes.rowHeader}>{columns[0]}</TableCell>
            <TableCell className={classes.rowHeader}>{columns[1]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rowComponents}</TableBody>
      </MUITable>
    </TableContainer>
  );
}
