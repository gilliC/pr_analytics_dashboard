import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FONT_REG, MAIN_BLUE, SECONDARY_BLUE } from "../../../../../consts";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme=> ({
  refresh: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: MAIN_BLUE,
    color: "white",
    fontFamily: FONT_REG,
    '&:hover': {
      backgroundColor: SECONDARY_BLUE,

    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "95%",
        marginBottom: 10
      },
  },
}));

export const RefreshButton = (props) => {
  const classes = useStyles();
  const onClick = () => {
    window.location.reload(false);
  };
  return (
    <Button className={classes.refresh} variant="contained" onClick={onClick}>
      Refresh
    </Button>
  );
};
