import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import { FONT_REG, TEXT_BLACK } from "../../../consts";

const useStyles = makeStyles({
  title: {
    fontFamily: FONT_REG,
    fontSize: 16,
    paddingLeft: 20,
    color: TEXT_BLACK,
  },
});

export const TableTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <h3 className={classes.title}>{title}</h3>
    </TableRow>
  );
};
