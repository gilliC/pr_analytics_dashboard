import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, TEXT_GRAY, TEXT_BLACK, MAIN_BLUE } from "../consts";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme=>({

  root: {
    height: '100%',
    padding: 5,
    marginRight: 30,
    alignItems: 'center', 
    display: 'flex',
    flexDirection: 'column',
    borderLeftColor: MAIN_BLUE,
    borderLeftWidth: 5,
    borderLeftStyle: 'solid',
    [theme.breakpoints.down("sm")]: {
      width: "98%",
      height: "95%",
      margin: 0,
      padding: 0
    },
  },
  title: {
    fontFamily: FONT_REG,
    color: TEXT_GRAY,
    fontSize: 16
  },
  number: {
    fontFamily: FONT_REG,
    color: TEXT_BLACK,
    fontSize: 35,
    margin: 0
  }
}));

export const Card = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <h3 className={classes.title}>{props.label}</h3>
      <h1 className={classes.number}>{props.value}</h1>
      <h3 className={classes.title}>{props.valueType}</h3>
    </Paper>
  );
};
