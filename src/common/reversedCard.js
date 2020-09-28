import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, MAIN_BLUE } from "../consts";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    padding: 5,
    marginRight: 30,
    alignItems: 'center', 
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: MAIN_BLUE,
  },
  title: {
    fontFamily: FONT_REG,
    color: 'white',
    fontSize: 16
  },
  number: {
    fontFamily: FONT_REG,
    color: 'white',
    fontSize: 35,
    margin: 0
  }
});

export const ReversedCard = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <h3 className={classes.title}>{props.label}</h3>
      <h1 className={classes.number}>{props.value}</h1>
      <h3 className={classes.title}>{props.valueType}</h3>
    </Paper>
  );
};
