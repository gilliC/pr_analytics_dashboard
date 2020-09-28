import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, TEXT_BLACK } from "../../../consts";

const useStyles = makeStyles({
  title: {
    fontFamily: FONT_REG,
    color: TEXT_BLACK,
  },
});

export const ScreenTitle = (props) => {
  const classes = useStyles();
  return <h1 className={classes.title}>PR E2E Dashboard</h1>;
};
