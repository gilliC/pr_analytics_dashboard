import React from "react";
import dayjs from 'dayjs';
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, MAIN_BLUE } from "../../../../../consts";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme=>({
  date: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'white',
    color: MAIN_BLUE,
    fontFamily: FONT_REG,
    borderColor: MAIN_BLUE,
    borderWidth: 1,
    borderStyle: 'solid',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "95%",
    },
  }
}));

export const PickDateButton = (props) => {
  const classes = useStyles();
  const date = dayjs().format('DD/MM')
  const onClick = () => {
    console.log("onClick DATE");
  };
  return (
    <Button className={classes.date} variant="contained" onClick={onClick}>{date}</Button>
  );
};
