import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, MAIN_BLUE } from "../../../../../consts";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  refresh: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: MAIN_BLUE,
    color: "white",
    fontFamily: FONT_REG
  },
});

export const RefreshButton = (props) => {
  const classes = useStyles();
  const onClick = () => {
    console.log("onClick REFRESH");
  };
  return (
    <Button className={classes.refresh} variant="contained" onClick={onClick}>
      Refresh
    </Button>
  );
};
