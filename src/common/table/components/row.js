import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { FONT_REG, TEXT_BLACK } from "../../../consts";

const useStyles = makeStyles({
  rowText: {
    fontFamily: FONT_REG,
    color: TEXT_BLACK,
    fontSize: 16,
    padding: 20,
  },
});

export default function Row({ id, value }) {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell className={classes.rowText} scope="row"> {id} </TableCell>
      <TableCell className={classes.rowText}>{value}</TableCell>
    </TableRow>
  );
}
