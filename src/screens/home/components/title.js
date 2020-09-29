import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, TEXT_BLACK } from "../../../consts";
import "./title.css";

const useStyles = makeStyles({
  title: {
    fontFamily: FONT_REG,
    color: TEXT_BLACK,
  },
});

const SplitText = ({copy, role}) => {
  const letters = copy.split("").map((char, index) => {
    const style = { "animation-delay": 0.5 + index / 10 + "s" };
    return (<span aria-hidden="true" key={index} style={style}>{char}</span>);
  })
  return (
    <span aria-label={copy} role={role}>
      {letters}
    </span>
  );
};

export const ScreenTitle = (props) => {
  const classes = useStyles();
  return (
    <h1 className={classes.title}>
      <SplitText copy="PR E2E Dashboard" role="heading" />
    </h1>
  );
};
